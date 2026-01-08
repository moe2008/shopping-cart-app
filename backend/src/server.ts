import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { itemsRouter } from './routes/itemsRoutes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/shopping-list';

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/items', itemsRouter);

// Health check
app.get('/', (req, res) => {
    res.json({ message: 'Shopping List API läuft!' });
});

// MongoDB Verbindung
mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log('✅ MongoDB verbunden');
        app.listen(PORT, () => {
            console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('❌ MongoDB Verbindungsfehler:', error);
        process.exit(1);
    });