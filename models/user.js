import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please provide your email"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "Please provide your password"],
        },
        role: {
            type: String,
            required: [true, "Please provide your role"],
            default: "user"
        }
    }
);

const User = mongoose.model("users", userSchema);

export default User;