import mongoose, { Schema } from "mongoose";

const podcastSchema = new Schema(
    {
        title: { type: String, required: true, unique: true },
        authors: [
            {
                name: {type: String, required: true},
                title: {type: String, required: true},
                profileImageUrl: {type: String, required: true, unique: true}
            }
        ],
        description: { type: String, required: true },
        language: {type: String, required: true},
        publisher: {type: String ,required: true},
        publicationDate: { type: String, required: true },
        audioFileUrl: {type: String, required: true, unique: true},
        thumnailFileUrl: {type: String, required: true, unique: true},
    },
    {
        timestamps: true,
    }
);

const Podcast = mongoose.models?.Podcast || mongoose.model("Podcast", podcastSchema);

export default Podcast;