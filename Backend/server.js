import express from 'express';
import "dotenv/config";
import connectDatabase from './config/database.js';

const app = express();
const PORT = process.env.PORT || 5000;






connectDatabase();

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
})