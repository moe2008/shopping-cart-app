import React from 'react';
import { Trash2 } from 'lucide-react';
import type { ShoppingItem } from '../types';

interface ItemRowProps {
    item: ShoppingItem;
    onToggleBought: (id: string) => void;
    onDelete: (id: string) => void;
}

export const ItemRow: React.FC<ItemRowProps> = ({ item, onToggleBought, onDelete }) => {
    return (
        <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-200 hover:bg-slate-50 active:bg-slate-100">
            {/* Custom Checkbox */}
            <button
                onClick={() => onToggleBought(item._id)}
                className={`
                    relative shrink-0 w-7 h-7 sm:w-6 sm:h-6 rounded-lg border-2 transition-all duration-300
                    active:scale-95
                    ${item.bought
                        ? 'bg-linear-to-br from-emerald-500 to-emerald-600 border-emerald-600 shadow-lg shadow-emerald-500/40'
                        : 'bg-white border-slate-300 hover:border-emerald-400 hover:scale-110 shadow-sm'
                    }
                `}
                aria-label={item.bought ? 'Als nicht gekauft markieren' : 'Als gekauft markieren'}
            >
                {item.bought && (
                    <svg
                        className="absolute inset-0 w-full h-full p-1 text-white drop-shadow-sm"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                    >
                        <polyline
                            points="20 6 9 17 4 12"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </button>

            {/* Item Name */}
            <span className={`
                flex-1 font-medium text-base sm:text-base transition-all duration-300 select-none
                ${item.bought
                    ? 'text-slate-400 line-through decoration-2 decoration-slate-300'
                    : 'text-slate-700'
                }
            `}>
                {item.name}
            </span>

            {/* Delete Button */}
            <button
                onClick={() => onDelete(item._id)}
                className="
                    shrink-0 p-2.5 sm:p-2 rounded-lg text-slate-400 
                    opacity-100 sm:opacity-0 sm:group-hover:opacity-100 
                    hover:bg-red-50 hover:text-red-500 
                    active:scale-95 active:bg-red-100
                    transition-all duration-200
                    min-h-11 min-w-11 sm:min-h-0 sm:min-w-0
                    flex items-center justify-center
                "
                aria-label="Artikel löschen"
            >
                <Trash2 size={20} className="sm:w-4.5 sm:h-4.5" />
            </button>
        </div>
    );
};