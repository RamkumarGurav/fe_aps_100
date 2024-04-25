import mongoose from "mongoose";

// Define the enum for image status
const Status = {
  ACTIVE: "active",
  INACTIVE: "inactive",
  BLOCKED: "blocked",
};

const FileType = {
  IMAGE: "image",
  VIDEO: "video",
};

const ImageSchema: any = new mongoose.Schema(
  {
    albumId: { type: mongoose.Schema.ObjectId, ref: "Album" },
    name: { type: String, required: true },
    file: { type: String, required: true },
    fileType: {
      type: String,
      enum: Object.values(FileType),
      default: FileType.IMAGE,
    },
    position: { type: Number, default: 9999 },
    status: {
      type: String,
      enum: Object.values(Status),
      default: Status.ACTIVE,
    },
    addedBy: { type: mongoose.Schema.ObjectId, ref: "Album", required: false },
  },
  {
    timestamps: true,
  }
);

// prettier-ignore
export default mongoose.models?.images || mongoose.model("images", ImageSchema);
