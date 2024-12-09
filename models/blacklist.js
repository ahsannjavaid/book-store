import mongoose from "mongoose";

const blacklistSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true, // Ensures a token is not added multiple times
    },
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 604800, // Automatically delete documents after 7 days (604800 seconds)
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  }
);

export default mongoose.models.blacklist || mongoose.model("blacklist", blacklistSchema);
