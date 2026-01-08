import React, { useState } from 'react';
import { Plus, AlertCircle } from 'lucide-react';

interface AddItemFormProps {
    onAddItem: (name: string) => Promise<void>;
}

export const AddItemForm: React.FC<AddItemFormProps> = ({ onAddItem }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!inputValue.trim()) {
            setError('Bitte gib einen Artikelnamen ein');
            return;
        }

        setIsSubmitting(true);
        try {
            await onAddItem(inputValue);
            setInputValue('');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Fehler beim Hinzufügen');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                    <label htmlFor="item-input" className="block text-sm font-semibold text-slate-700 mb-2">
                        Neuer Artikel
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <input
                            id="item-input"
                            type="text"
                            value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                                setError(null);
                            }}
                            placeholder="z.B. Milch, Brot, Eier..."
                            disabled={isSubmitting}
                            className={`
                                flex-1 px-4 py-3 rounded-xl border-2 
                                transition-all duration-200
                                focus:outline-none focus:ring-4 focus:ring-blue-500/20
                                disabled:opacity-50 disabled:cursor-not-allowed
                                text-base
                                ${error
                                    ? 'border-red-400 focus:border-red-500'
                                    : 'border-slate-300 focus:border-blue-500'
                                }
                            `}
                        />
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="
                                w-full sm:w-auto
                                px-6 py-3 bg-linear-to-r from-blue-600 to-blue-700 
                                text-white rounded-xl font-semibold
                                hover:from-blue-700 hover:to-blue-800
                                active:scale-95
                                disabled:opacity-50 disabled:cursor-not-allowed
                                transition-all duration-200
                                shadow-lg shadow-blue-600/30
                                flex items-center justify-center gap-2
                                min-h-12
                            "
                        >
                            <Plus size={20} />
                            <span>Hinzufügen</span>
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="flex items-start gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm animate-in fade-in slide-in-from-top-2 duration-200">
                        <AlertCircle size={16} className="shrink-0 mt-0.5" />
                        <span>{error}</span>
                    </div>
                )}
            </form>
        </div>
    );
};