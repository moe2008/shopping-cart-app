import React from 'react';
import { ItemsList } from './ItemsList';
import type { ShoppingItem } from '../types';

interface ItemsSectionProps {
    title: string;
    items: ShoppingItem[];
    emptyText?: string;
    onToggleBought: (id: string) => void;
    onDelete: (id: string) => void;
}

export const ItemsSection: React.FC<ItemsSectionProps> = ({
    title,
    items,
    emptyText,
    onToggleBought,
    onDelete,
}) => {
    if (items.length === 0 && !emptyText) {
        return null;
    }

    return (
        <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                {title}
            </h2>

            {items.length > 0 ? (
                <ItemsList
                    items={items}
                    onToggleBought={onToggleBought}
                    onDelete={onDelete}
                />
            ) : (
                emptyText && (
                    <div className="py-8 text-center">
                        <p className="text-slate-400 text-sm">{emptyText}</p>
                    </div>
                )
            )}
        </div>
    );
};