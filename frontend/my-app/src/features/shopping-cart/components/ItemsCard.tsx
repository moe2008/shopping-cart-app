import React from 'react';
import { ItemsSection } from './ItemsSection';
import type { ShoppingItem } from '../types';

interface ItemsCardProps {
    openItems: ShoppingItem[];
    doneItems: ShoppingItem[];
    onToggleBought: (id: string) => void;
    onDelete: (id: string) => void;
}

export const ItemsCard: React.FC<ItemsCardProps> = ({
    openItems,
    doneItems,
    onToggleBought,
    onDelete,
}) => {
    const hasAnyItems = openItems.length > 0 || doneItems.length > 0;

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-linear-to-r from-slate-50 to-slate-100 px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                    <h3 className="text-base sm:text-lg font-bold text-slate-800">Deine Artikel</h3>
                    <div className="flex items-center gap-2 text-xs sm:text-sm">
                        <span className="px-2.5 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold whitespace-nowrap">
                            {openItems.length} offen
                        </span>
                        <span className="px-2.5 sm:px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-semibold whitespace-nowrap">
                            {doneItems.length} erledigt
                        </span>
                    </div>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-6">
                {!hasAnyItems ? (
                    <div className="py-12 sm:py-16 text-center">
                        <div className="mb-3 sm:mb-4">
                            <svg
                                className="mx-auto h-20 w-20 sm:h-24 sm:w-24 text-slate-300"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-700 mb-2">
                            Noch keine Artikel
                        </h3>
                        <p className="text-sm sm:text-base text-slate-500 px-4">
                            Füge deinen ersten Artikel hinzu, um loszulegen
                        </p>
                    </div>
                ) : (
                    <div className="space-y-6 sm:space-y-8">
                        <ItemsSection
                            title="Noch zu kaufen"
                            items={openItems}
                            emptyText="Alles erledigt 🎉"
                            onToggleBought={onToggleBought}
                            onDelete={onDelete}
                        />

                        {doneItems.length > 0 && (
                            <ItemsSection
                                title="Erledigt"
                                items={doneItems}
                                onToggleBought={onToggleBought}
                                onDelete={onDelete}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};