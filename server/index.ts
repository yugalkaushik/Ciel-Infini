import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes'


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});