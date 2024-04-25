import mongoose from "mongoose";

// Define the enum for year status
const Status = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  BLOCKED: "blocked",
};

const YearSchema: any = new mongoose.Schema(
  {
    startYear: { type: String, required: true, length: 4 },
    endYear: { type: String, required: true, length: 4 },
    fiscalYear: { type: String, required: true, length: 7 },
    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.ACTIVE,
    },
    addedBy: { type: mongoose.Schema.ObjectId, ref: "User", required: false },
  },
  {
    timestamps: true,
  }
);

// prettier-ignore
export default mongoose.models?.years || mongoose.model("years", YearSchema);
