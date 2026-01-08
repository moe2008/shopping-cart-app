import mongoose, { Document, Schema } from 'mongoose';

export interface IShoppingItem extends Document {
    name: string;
    bought: boolean;
    createdAt: Date;
}

const ShoppingItemSchema = new Schema<IShoppingItem>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    bought: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model<IShoppingItem>('ShoppingItem', ShoppingItemSchema);