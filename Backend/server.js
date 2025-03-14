import express from 'express';
import "dotenv/config";
import connectDatabase from './config/database.js';
import bookRoutes from './routes/bookRoutes.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/v1/', bookRoutes);



connectDatabase();

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})