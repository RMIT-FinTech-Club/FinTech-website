import mongoose, { Schema } from "mongoose";

const technicalProjectSchema = new Schema(
  {
    projectName: { type: String, required: true },
    description: { type: String, required: true },
    projectLeaders: { type: [String], required: true },
    projectType: { type: String, required: true },
    imgSrc: { type: String, required: true },
    startDate: { type: Date, required: true },
    teamMembers: { type: [String], required: true },
    projectDemo: { type: String, required: true },
  }, {
  timestamps: true,
}
);

const TechnicalProject = mongoose.models?.TechnicalProject || mongoose.model("TechnicalProject", technicalProjectSchema);

export default TechnicalProject;