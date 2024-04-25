import mongoose from "mongoose";

// Define the enum for album status
const Status = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  BLOCKED: "blocked",
};

const AlbumSchema: any = new mongoose.Schema(
  {
    yearId: { type: mongoose.Schema.ObjectId, ref: "Year" },
    name: { type: String, required: true },
    file: { type: String, required: true },
    position: { type: Number, default: 9999 },
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
export default mongoose.models?.albums || mongoose.model("albums", AlbumSchema);
