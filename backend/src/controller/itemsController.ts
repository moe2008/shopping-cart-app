import { Request, Response } from 'express';
import ShoppingItem from '../models/ShoppingItem';

// GET /items - Alle Items abrufen
export const getAllItems = async (req: Request, res: Response): Promise<void> => {
    try {
        const items = await ShoppingItem.find().sort({ createdAt: -1 });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Fehler beim Abrufen der Items', error });
    }
};

// POST /items - Neues Item hinzufügen
export const createItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.body;

        if (!name || name.trim() === '') {
            res.status(400).json({ message: 'Name ist erforderlich' });
            return;
        }

        const newItem = new ShoppingItem({
            name: name.trim(),
            bought: false
        });

        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: 'Fehler beim Erstellen des Items', error });
    }
};

// PUT /items/:id - Item aktualisieren
export const updateItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { bought } = req.body;

        if (typeof bought !== 'boolean') {
            res.status(400).json({ message: 'bought muss ein Boolean sein' });
            return;
        }

        const updatedItem = await ShoppingItem.findByIdAndUpdate(
            id,
            { bought },
            { new: true }
        );

        if (!updatedItem) {
            res.status(404).json({ message: 'Item nicht gefunden' });
            return;
        }

        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: 'Fehler beim Aktualisieren des Items', error });
    }
};

// DELETE /items/:id - Item löschen
export const deleteItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const deletedItem = await ShoppingItem.findByIdAndDelete(id);

        if (!deletedItem) {
            res.status(404).json({ message: 'Item nicht gefunden' });
            return;
        }

        res.json({ message: 'Item erfolgreich gelöscht', item: deletedItem });
    } catch (error) {
        res.status(500).json({ message: 'Fehler beim Löschen des Items', error });
    }
};