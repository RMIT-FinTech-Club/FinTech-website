import mongoose, { Schema } from "mongoose";

const storyHistorySchema = new Schema(
  {
    year: { type: Number, required: true },
    description: { type: String, required: true },
  }, {
  timestamps: true,
});

const StoryHistory = mongoose.models?.StoryHistory || mongoose.model("StoryHistory", storyHistorySchema);

export default StoryHistory;