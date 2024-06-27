import mongoose from "mongoose";

const connectMongoDB = async () => {
    // Check if we have a connection to the database or if it's currently
    // connecting or disconnecting (in which case we don't want to initiate a new connection)
    if (mongoose.connection.readyState === 1) {
        return;
    }

    if (mongoose.connection.readyState === 2 || mongoose.connection.readyState === 3) {
        console.log("Connection to MongoDB is currently in the process of connecting/disconnecting");
        return;
    }

    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI!, {
            dbName: "fintech",
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
};

export default connectMongoDB;