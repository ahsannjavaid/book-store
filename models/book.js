import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        authorId: {
            type: mongoose.Schema.Types.ObjectId, // Reference to an Author collection
            ref: "authors",
            required: true,
        },
        description: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0, // Ensures price is non-negative
        },
        genreId: {
            type: mongoose.Schema.Types.ObjectId, // Reference to a Genre collection
            ref: "genres",
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 0, // Minimum rating
            max: 5, // Maximum rating
        },
    },
    {
        timestamps: true, // Automatically includes `createdAt` and `updatedAt` fields
    }
);

export default mongoose.models.books || mongoose.model("books", bookSchema);
