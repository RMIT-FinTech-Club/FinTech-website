import mongoose, { Schema } from "mongoose";

const partnerSchema = new Schema(
  {
    name: { type: String, required: true },
    imgSrc: { type: String, required: true },
  }, {
  timestamps: true,
}
);

const Partner = mongoose.models?.Partner || mongoose.model("Partner", partnerSchema);

export default Partner;