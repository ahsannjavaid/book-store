import mongoose from "mongoose";

const historySchema = new mongoose.Schema(
    {
        search: {
            type: String,
            required: true,
        },
        userEmail: {
            type: String,
            required: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
        }
    },
    {
        timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
    }
);

export default mongoose.models.histories || mongoose.model("histories", historySchema);
