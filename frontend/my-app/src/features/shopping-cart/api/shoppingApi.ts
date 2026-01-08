import { api } from "@/shared/api/client";
import type { ShoppingItem } from "../types";

type CreateItemBody = { name: string };
type UpdateItemBody = { bought: boolean };

export const shoppingApi = {
    async getItems(): Promise<ShoppingItem[]> {
        const { data } = await api.get<ShoppingItem[]>("/items");
        return data;
    },

    async createItem(body: CreateItemBody): Promise<ShoppingItem> {
        const { data } = await api.post<ShoppingItem>("/items", body);
        return data;
    },

    async updateItem(id: string, body: UpdateItemBody): Promise<ShoppingItem> {
        const { data } = await api.put<ShoppingItem>(`/items/${id}`, body);
        return data;
    },

    async deleteItem(id: string): Promise<void> {
        await api.delete(`/items/${id}`);
    },
};
