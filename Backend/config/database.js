import mongoose from "mongoose";
import "dotenv/config";

const connectDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Successfully connected to MONGODB");
    } catch (error) {
        console.log("❌ MONGODB connection error", error);
        process.exit(1);
    }
}

export default connectDatabase;