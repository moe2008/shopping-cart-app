import express from 'express';
import {
    getAllItems,
    createItem,
    updateItem,
    deleteItem
} from "../controller/itemsController";

const itemsRouter = express.Router();

itemsRouter.get('/', getAllItems);
itemsRouter.post('/', createItem);
itemsRouter.put('/:id', updateItem);
itemsRouter.delete('/:id', deleteItem);

export { itemsRouter };