import mongoose, { Schema } from "mongoose";

const memberSchema = new Schema(
    {
        name: { type: String, required: true },
        generation: { type: String, required: true },
        position: { type: String, required: true },
        birthdate: { type: String, required: true },
        avatarURL: { type: String, required: false},
    },
    {
        timestamps: true,
    }
)

const Member = mongoose.models?.Member || mongoose.model("Member", memberSchema);

export default Member;
