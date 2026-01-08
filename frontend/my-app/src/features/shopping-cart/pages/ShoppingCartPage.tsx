import React, { useEffect, useMemo } from 'react';
import { useShoppingStore } from '../store/shoppingStore';
import { AddItemForm } from '../components';
import { ItemsCard } from '../components';
import { Loader2, AlertCircle } from 'lucide-react';

export const ShoppingPage: React.FC = () => {
    const { items, isLoading, error, fetchItems, addItem, toggleBought, deleteItem } = useShoppingStore();

    useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    const { openItems, doneItems } = useMemo(() => {
        return {
            openItems: items.filter(item => !item.bought),
            doneItems: items.filter(item => item.bought),
        };
    }, [items]);

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
                <header className="mb-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-3 tracking-tight">
                        Einkaufsliste
                    </h1>
                    <p className="text-slate-600 text-lg">
                        Organisiere deinen Einkauf einfach und übersichtlich
                    </p>
                </header>

                {isLoading && items.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
                        <p className="text-slate-600">Lade Artikel...</p>
                    </div>
                )}

                {error && (
                    <div className="mb-6 bg-red-50 border-2 border-red-200 rounded-2xl p-6 flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-red-900 mb-1">Fehler aufgetreten</h3>
                            <p className="text-red-700">{error}</p>
                        </div>
                    </div>
                )}

                {!isLoading || items.length > 0 ? (
                    <div className="space-y-6">
                        <AddItemForm onAddItem={addItem} />
                        <ItemsCard
                            openItems={openItems}
                            doneItems={doneItems}
                            onToggleBought={toggleBought}
                            onDelete={deleteItem}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ShoppingPage;