import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        biography: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true, // Automatically includes `createdAt` and `updatedAt` fields
    }
);

export default mongoose.models.authors || mongoose.model("authors", authorSchema);
