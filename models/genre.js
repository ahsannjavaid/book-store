import mongoose from "mongoose";

const genresSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
    },
    {
        timestamps: true, // Automatically includes `createdAt` and `updatedAt` fields
    }
);

export default mongoose.models.genres || mongoose.model("genres", genresSchema);
