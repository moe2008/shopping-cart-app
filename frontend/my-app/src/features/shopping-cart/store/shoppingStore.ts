import { create } from "zustand";
import type { ShoppingItem } from "../types";
import { shoppingApi } from "../api/shoppingApi";

type ShoppingState = {
    items: ShoppingItem[];
    isLoading: boolean;
    error: string | null;

    fetchItems: () => Promise<void>;
    addItem: (name: string) => Promise<void>;
    toggleBought: (id: string) => Promise<void>;
    deleteItem: (id: string) => Promise<void>;
    clearError: () => void;
};

export const useShoppingStore = create<ShoppingState>((set, get) => ({
    items: [],
    isLoading: false,
    error: null,

    clearError: () => set({ error: null }),

    fetchItems: async () => {
        set({ isLoading: true, error: null });
        try {
            const items = await shoppingApi.getItems();
            set({ items });
        } catch (e) {
            set({ error: "Konnte Items nicht laden." });
        } finally {
            set({ isLoading: false });
        }
    },

    addItem: async (name: string) => {
        const trimmed = name.trim();
        if (!trimmed) return;

        set({ error: null });
        try {
            const created = await shoppingApi.createItem({ name: trimmed });
            set((s) => ({ items: [created, ...s.items] }));
        } catch (e) {
            set({ error: "Konnte Item nicht erstellen." });
        }
    },

    toggleBought: async (id: string) => {
        const current = get().items.find((i) => i._id === id);
        if (!current) return;

        set({ error: null });
        const nextBought = !current.bought;

        try {
            const updated = await shoppingApi.updateItem(id, { bought: nextBought });
            set((s) => ({
                items: s.items.map((i) => (i._id === id ? updated : i)),
            }));
        } catch (e) {
            set({ error: "Konnte Item nicht updaten." });
        }
    },

    deleteItem: async (id: string) => {
        set({ error: null });
        try {
            await shoppingApi.deleteItem(id);
            set((s) => ({ items: s.items.filter((i) => i._id !== id) }));
        } catch (e) {
            set({ error: "Konnte Item nicht löschen." });
        }
    },
}));
