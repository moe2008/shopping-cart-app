import React from 'react';
import { ItemRow } from './ItemRow';
import type { ShoppingItem } from '../types';

interface ItemsListProps {
  items: ShoppingItem[];
  onToggleBought: (id: string) => void;
  onDelete: (id: string) => void;
}

export const ItemsList: React.FC<ItemsListProps> = ({ items, onToggleBought, onDelete }) => {
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <ItemRow
          key={item._id}
          item={item}
          onToggleBought={onToggleBought}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};