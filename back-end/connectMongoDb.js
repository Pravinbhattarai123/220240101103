import mongoose from "mongoose";

const connectMongoDB = async () => { 
    try {
        await mongoose.connect("mongodb+srv://bhattaraipravin455_db_user:U06OZqtu8H1EuQ5o@cluster0.xy9webj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB connected");
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
    }

    export default connectMongoDB;