import mongoose from "mongoose";

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
    },
    {timestamps: true}
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;