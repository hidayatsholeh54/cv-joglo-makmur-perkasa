"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  INITIAL_USERS,
  INITIAL_PARTNER_FARMS,
  INITIAL_VETERINARIANS,
  INITIAL_LIVESTOCK_BATCHES,
  INITIAL_LIVESTOCK_ITEMS,
  INITIAL_PRODUCTS,
  INITIAL_ORDERS,
  INITIAL_QRIS_SETTINGS,
} from "@/data/initial-db";

/**
 * Helper format mata uang Rupiah (IDR)
 */
export function formatRupiah(amount) {
  const num = Number(amount) || 0;
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(num);
}

export const useAppStore = create(
  persist(
    (set, get) => ({
      // =====================================================================
      // 1. STATE DATA UTAMA (SESUAI SKEMA TABEL ERD SUPABASE)
      // =====================================================================
      users: INITIAL_USERS,
      currentUser: null, // Default: pengunjung datang sebagai Tamu (belum login)
      adminViewRole: "SUPER_ADMIN", // Switcher di /admin: "SUPER_ADMIN" | "FIELD_ADMIN"

      partnerFarms: INITIAL_PARTNER_FARMS,
      veterinarians: INITIAL_VETERINARIANS,
      livestockBatches: INITIAL_LIVESTOCK_BATCHES,
      livestockItems: INITIAL_LIVESTOCK_ITEMS,
      products: INITIAL_PRODUCTS,
      orders: INITIAL_ORDERS,
      qrisSettings: INITIAL_QRIS_SETTINGS,

      // Draft item yang sedang dipilih untuk Checkout
      checkoutDraft: {
        itemType: "LIVESTOCK", // "LIVESTOCK" | "PRODUCT"
        itemId: "lv-qr-088",
        quantity: 1,
        paymentScheme: "DP_50_PERCENT", // "DP_50_PERCENT" | "FULL_PAYMENT"
      },

      // =====================================================================
      // 2. ACTIONS: AUTENTIKASI GOOGLE & ROLE SWITCHER
      // =====================================================================
      loginAsRole: (roleType) => {
        const { users } = get();
        if (roleType === "PUBLIC") {
          set({ currentUser: null });
          return;
        }
        const matched =
          users.find((u) => u.role === roleType && !u.is_blacklisted) ||
          users[0];
        set({
          currentUser: matched,
          adminViewRole:
            roleType === "FIELD_ADMIN" ? "FIELD_ADMIN" : "SUPER_ADMIN",
        });
      },

      switchDemoUser: (userId) => {
        const { users } = get();
        if (!userId || userId === "GUEST") {
          set({ currentUser: null });
          return;
        }
        const found = users.find((u) => u.id === userId) || null;
        set({
          currentUser: found,
          adminViewRole:
            found?.role === "FIELD_ADMIN" ? "FIELD_ADMIN" : "SUPER_ADMIN",
        });
      },

      loginWithGoogle: ({ name, email, whatsapp }) => {
        const { users } = get();
        const existing = users.find(
          (u) => u.email.toLowerCase() === email.toLowerCase()
        );
        if (existing) {
          set({ currentUser: existing });
          return existing;
        }
        const newUser = {
          id: `usr-${Date.now()}`,
          email,
          full_name: name || email.split("@")[0],
          avatar_url: "",
          phone_wa: whatsapp || "081234567890",
          role: "BUYER",
          expired_streak_today: 0,
          cooldown_until: null,
          is_blacklisted: false,
          created_at: new Date().toISOString(),
        };
        set({
          users: [...users, newUser],
          currentUser: newUser,
        });
        return newUser;
      },

      logout: () => set({ currentUser: null }),

      setAdminViewRole: (role) => set({ adminViewRole: role }),

      // =====================================================================
      // 3. ACTIONS: PILIH PRODUK / TERNAK KE HALAMAN CHECKOUT
      // =====================================================================
      selectForCheckout: ({
        itemType,
        itemId,
        quantity = 1,
        paymentScheme = "FULL_PAYMENT",
      }) => {
        set({
          checkoutDraft: { itemType, itemId, quantity, paymentScheme },
        });
      },

      // =====================================================================
      // 4. ACTIONS: BUAT INVOICE + 5 SABUK PENGAMAN ANTI-SPAM (EXPIRY 1 JAM)
      // =====================================================================
      createOrderInvoice: ({
        customer_name,
        customer_wa,
        shipping_address,
        payment_scheme,
        itemTypeOverride,
        itemIdOverride,
        quantityOverride,
      }) => {
        const state = get();
        let user = state.currentUser;

        // Mendukung Guest Checkout (Pembeli tanpa login Google tetap bisa pesan cepat via WhatsApp)
        if (!user) {
          const cleanWa = (customer_wa || "").trim();
          const cleanName = (customer_name || "").trim() || "Tamu Terhormat";
          const guestId = `guest-${cleanWa.replace(/\D/g, "") || Date.now()}`;

          user = state.users.find((u) => u.phone_wa === cleanWa || u.id === guestId) || {
            id: guestId,
            email: `${cleanWa.replace(/\D/g, "") || "tamu"}@whatsapp.buyer`,
            full_name: cleanName,
            avatar_url: "",
            phone_wa: cleanWa,
            role: "BUYER",
            expired_streak_today: 0,
            cooldown_until: null,
            is_blacklisted: false,
            created_at: new Date().toISOString(),
          };

          if (!state.users.some((u) => u.id === user.id)) {
            set({ users: [...state.users, user] });
          }
        }

        // Cek Sabuk 1: Apakah akun masuk daftar Blacklist Permanen (Struk Palsu)?
        const freshUser = state.users.find((u) => u.id === user.id) || user;
        if (freshUser.is_blacklisted) {
          return {
            ok: false,
            error:
              "Akun Google Anda telah diblokir permanen oleh Admin karena pelanggaran bukti pembayaran.",
          };
        }

        // Cek Sabuk 2: Apakah akun sedang terkena Cooldown 24 Jam (akibat 3x Invoice Expired)?
        if (
          freshUser.cooldown_until &&
          new Date(freshUser.cooldown_until).getTime() > Date.now()
        ) {
          return {
            ok: false,
            error:
              "Akun Anda sedang dalam masa Cooldown 24 Jam karena membiarkan 3 pesanan hangus berturut-turut hari ini.",
          };
        }

        // Cek Sabuk 3: Apakah user masih punya >= 2 Invoice UNPAID yang menggantung?
        const activeUnpaidCount = state.orders.filter(
          (o) => o.user_id === user.id && o.payment_status === "UNPAID"
        ).length;

        if (activeUnpaidCount >= 2) {
          return {
            ok: false,
            error:
              "Anda masih memiliki 2 pesanan berstatus Belum Dibayar (UNPAID). Silakan selesaikan atau batalkan pesanan sebelumnya terlebih dahulu.",
          };
        }

        const itemType = itemTypeOverride || state.checkoutDraft.itemType;
        const itemId = itemIdOverride || state.checkoutDraft.itemId;
        const quantity =
          Number(quantityOverride || state.checkoutDraft.quantity) || 1;

        let itemTitle = "";
        let orderCategory = "QURBAN";
        let totalAmount = 0;
        let baseModalFather = 0;
        let operationalCost = 0;

        if (itemType === "LIVESTOCK") {
          const lv =
            state.livestockItems.find((i) => i.id === itemId) ||
            state.livestockItems[0];
          if (lv.available_qty < quantity) {
            return {
              ok: false,
              error: `Stok ternak tidak mencukupi (Tersisa ${lv.available_qty} ekor).`,
            };
          }
          itemTitle = lv.eartag_code
            ? `${lv.title} (${lv.eartag_code})`
            : lv.title;
          orderCategory = lv.category;
          totalAmount = lv.sell_price_rp * quantity;
          baseModalFather = lv.base_cost_rp * quantity;
        } else {
          const prod =
            state.products.find((p) => p.id === itemId) || state.products[1];
          if (prod.stock_qty < quantity) {
            return {
              ok: false,
              error: `Stok paket susu tidak mencukupi (Tersisa ${prod.stock_qty} paket).`,
            };
          }
          itemTitle = prod.name;
          orderCategory = "SUSU_BUBUK";
          totalAmount = prod.sell_price_rp * quantity;
          baseModalFather = prod.base_cost_rp * quantity;
          operationalCost = 10000 * quantity;
        }

        const uniqueCode = Math.floor(100 + Math.random() * 899);
        const isDp =
          payment_scheme === "DP_50_PERCENT" && itemType === "LIVESTOCK";
        const amountToPay =
          (isDp ? Math.round(totalAmount * 0.5) : totalAmount) + uniqueCode;
        const fatherShareNow = isDp
          ? Math.round(baseModalFather * 0.5)
          : baseModalFather;
        const estimatedProfit = amountToPay - fatherShareNow - operationalCost;

        const invoiceNumber = `INV-2026-0${uniqueCode}`;
        const now = Date.now();
        const expiresAt = new Date(now + 60 * 60 * 1000).toISOString(); // Batas Bayar 1 Jam (60 Menit)

        const newOrder = {
          id: `ord-${uniqueCode}`,
          invoice_code: invoiceNumber,
          user_id: user.id,
          customer_name: customer_name || user.full_name,
          customer_email: user.email,
          customer_wa: customer_wa || user.phone_wa,
          shipping_address: shipping_address || "Yogyakarta",
          order_category: orderCategory,
          item_type: itemType,
          item_id: itemId,
          item_title: itemTitle,
          quantity,
          payment_scheme: isDp ? "DP_50_PERCENT" : "FULL_PAYMENT",
          total_amount_rp: totalAmount,
          amount_to_pay_rp: amountToPay,
          base_modal_father_rp: fatherShareNow,
          operational_cost_rp: operationalCost,
          estimated_profit_rp: estimatedProfit,
          is_hpp_settled_to_father: false,
          payment_status: "UNPAID",
          payment_proof_url: "",
          shipping_tracking_code: "",
          expires_at: expiresAt,
          created_at: new Date(now).toISOString(),
        };

        set({
          orders: [newOrder, ...state.orders],
        });

        return { ok: true, invoice_code: invoiceNumber, order: newOrder };
      },

      // Upload bukti bayar oleh pembeli (< 1 jam)
      submitPaymentProof: (
        invoiceCode,
        proofNote = "/bukti-transfer-baru.jpg"
      ) => {
        set((state) => ({
          orders: state.orders.map((o) =>
            o.invoice_code === invoiceCode
              ? {
                  ...o,
                  payment_status: "WAITING_VERIFICATION",
                  payment_proof_url: proofNote,
                }
              : o
          ),
        }));
      },

      // Auto-Cancel / Expire jika lewat 1 Jam (60 menit) + Cooldown 24 Jam jika 3x berturut-turut
      markOrderExpired: (invoiceCode) => {
        const state = get();
        const targetOrder = state.orders.find(
          (o) => o.invoice_code === invoiceCode
        );
        if (!targetOrder || targetOrder.payment_status !== "UNPAID") return;

        const updatedUsers = state.users.map((u) => {
          if (u.id !== targetOrder.user_id) return u;
          const newStreak = (u.expired_streak_today || 0) + 1;
          const cooldownUntil =
            newStreak >= 3
              ? new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
              : u.cooldown_until;
          return {
            ...u,
            expired_streak_today: newStreak,
            cooldown_until: cooldownUntil,
          };
        });

        set({
          orders: state.orders.map((o) =>
            o.invoice_code === invoiceCode
              ? { ...o, payment_status: "EXPIRED" }
              : o
          ),
          users: updatedUsers,
          currentUser:
            state.currentUser?.id === targetOrder.user_id
              ? updatedUsers.find((u) => u.id === targetOrder.user_id)
              : state.currentUser,
        });
      },

      // =====================================================================
      // 5. ACTIONS HALAMAN ADMIN (7 MODUL KENDALI PROFIT, STOK & ANTI-SPAM)
      // =====================================================================
      approveOrderPayment: (orderId) => {
        set((state) => {
          const target = state.orders.find((o) => o.id === orderId);
          if (!target) return state;

          const newStatus =
            target.payment_scheme === "DP_50_PERCENT" ? "DP_PAID" : "PAID_FULL";
          const qtyOrdered = Number(target.quantity) || 1;

          const updatedLivestock = state.livestockItems.map((lv) => {
            if (lv.id !== target.item_id) return lv;
            const nextQty = Math.max(0, lv.available_qty - qtyOrdered);
            return {
              ...lv,
              available_qty: nextQty,
              sale_status:
                nextQty === 0
                  ? newStatus === "DP_PAID"
                    ? "BOOKED_DP"
                    : "SOLD"
                  : lv.sale_status,
              booked_by_name: `Dibooking ${target.customer_name}`,
            };
          });

          const updatedProducts = state.products.map((p) => {
            if (p.id !== target.item_id) return p;
            return {
              ...p,
              stock_qty: Math.max(0, p.stock_qty - qtyOrdered),
            };
          });

          return {
            orders: state.orders.map((o) =>
              o.id === orderId ? { ...o, payment_status: newStatus } : o
            ),
            livestockItems: updatedLivestock,
            products: updatedProducts,
          };
        });
      },

      reopenAndApproveOrder: (orderId) => {
        get().approveOrderPayment(orderId);
      },

      blacklistSpammerByOrder: (orderId) => {
        set((state) => {
          const target = state.orders.find((o) => o.id === orderId);
          if (!target) return state;

          return {
            orders: state.orders.map((o) =>
              o.id === orderId ? { ...o, payment_status: "REJECTED" } : o
            ),
            users: state.users.map((u) =>
              u.id === target.user_id ? { ...u, is_blacklisted: true } : u
            ),
          };
        });
      },

      toggleHppSettledToFather: (orderId) => {
        set((state) => ({
          orders: state.orders.map((o) =>
            o.id === orderId
              ? { ...o, is_hpp_settled_to_father: !o.is_hpp_settled_to_father }
              : o
          ),
        }));
      },

      updateOrderResi: (orderId, trackingCode) => {
        set((state) => ({
          orders: state.orders.map((o) =>
            o.id === orderId
              ? { ...o, shipping_tracking_code: trackingCode }
              : o
          ),
        }));
      },

      addLivestockItem: (newItem) => {
        set((state) => ({
          livestockItems: [
            {
              id: `lv-${Date.now()}`,
              inventory_mode: newItem.inventory_mode || "REGULAR_STOCK_QTY",
              eartag_code:
                newItem.inventory_mode === "INDIVIDUAL_QR"
                  ? newItem.eartag_code ||
                    `JMP-2026-${Math.floor(100 + Math.random() * 899)}`
                  : null,
              title: newItem.title || "Kambing Jawa Randu Siap Potong",
              category: newItem.category || "AQIQAH",
              breed: newItem.breed || "Jawa Randu",
              gender: newItem.gender || "JANTAN",
              age_poel: newItem.age_poel || "Poel 1 (12 Bulan)",
              weight_kg: Number(newItem.weight_kg) || 24,
              weight_range_label: newItem.weight_range_label || "22 – 25 Kg",
              shoulder_height_cm: Number(newItem.shoulder_height_cm) || 70,
              ear_length_cm: 25,
              total_quota_qty: Number(newItem.available_qty) || 20,
              available_qty: Number(newItem.available_qty) || 20,
              base_cost_rp: Number(newItem.base_cost_rp) || 1950000,
              sell_price_rp: Number(newItem.sell_price_rp) || 2350000,
              dp_price_rp: Math.round(
                (Number(newItem.sell_price_rp) || 2350000) * 0.5
              ),
              photo_main_url:
                newItem.photo_main_url ||
                "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=900&q=80",
              is_pmk_free: true,
              vaccine_notes:
                newItem.vaccine_notes ||
                "Lulus pemeriksaan drh. & bebas PMK",
              vet_name: newItem.vet_name || "drh. Hendra Kusuma, M.Sc.",
              partner_farm_name:
                newItem.partner_farm_name || "Kandang Partner Bantul B2",
              sale_status: "AVAILABLE",
              booked_by_name: null,
            },
            ...state.livestockItems,
          ],
        }));
      },

      updateLivestockFromQrScan: (eartagCode, updates) => {
        set((state) => ({
          livestockItems: state.livestockItems.map((lv) =>
            lv.eartag_code === eartagCode
              ? {
                  ...lv,
                  ...updates,
                  dp_price_rp: updates.sell_price_rp
                    ? Math.round(Number(updates.sell_price_rp) * 0.5)
                    : lv.dp_price_rp,
                }
              : lv
          ),
        }));
      },

      updateRegularStockQty: (itemId, newQty) => {
        set((state) => ({
          livestockItems: state.livestockItems.map((lv) =>
            lv.id === itemId
              ? {
                  ...lv,
                  available_qty: Math.max(0, Number(newQty)),
                  total_quota_qty: Math.max(
                    lv.total_quota_qty,
                    Number(newQty)
                  ),
                }
              : lv
          ),
        }));
      },

      updateMilkProduct: (productId, updates) => {
        set((state) => ({
          products: state.products.map((p) =>
            p.id === productId ? { ...p, ...updates } : p
          ),
        }));
      },

      resetDemoStore: () => {
        set({
          users: INITIAL_USERS,
          currentUser: null,
          partnerFarms: INITIAL_PARTNER_FARMS,
          veterinarians: INITIAL_VETERINARIANS,
          livestockBatches: INITIAL_LIVESTOCK_BATCHES,
          livestockItems: INITIAL_LIVESTOCK_ITEMS,
          products: INITIAL_PRODUCTS,
          orders: INITIAL_ORDERS,
          qrisSettings: INITIAL_QRIS_SETTINGS,
        });
      },

      resetDemoData: () => {
        get().resetDemoStore();
      },
    }),
    {
      name: "joglo-makmur-storage-v11",
    }
  )
);
