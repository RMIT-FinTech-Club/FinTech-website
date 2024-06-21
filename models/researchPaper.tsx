import mongoose, { Schema } from "mongoose";

const researchPaperSchema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        publicationDate: { type: String, required: true },
        description: { type: String, required: true },
        fileURL: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const ResearchPaper = mongoose.models?.ResearchPaper || mongoose.model("ResearchPaper", researchPaperSchema);

export default ResearchPaper;