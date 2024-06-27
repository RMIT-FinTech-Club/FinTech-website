import mongoose from "mongoose";

export async function connect() {
    if (mongoose.connections[0].readyState) {
        return true
    }
    try {
        await mongoose.connect('mongodb+srv://fintech:fintech@rmitfintech.wkr5dko.mongodb.net/fintech?retryWrites=true&w=majority&appName=RMITFintech');
        console.log("MongoDB Connected")
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log('MongoDB connected');
        })
        connection.on('error', (error) => {
            console.log("Database connection error " + error);
            process.exit;
        })
    } catch (error) {
        console.log(error)
    }
};