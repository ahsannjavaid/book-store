import dbConnect from "@/db/config";
import { checkBlacklist } from "@/middlewares/blacklist";
import book from "@/models/book";

export default async function handler(req, res) {
    await dbConnect();
    await checkBlacklist(req, res);
    const id = req.query.id;
    try {
        const data = await book.findById(id);
        if (data) {
            res.status(200).json({ message: "Book details fetched successfully!", data });
        } else {
            res.status(404).json({ message: "This book does not exist!" });
        }
    } catch (error) {
        console.error("Error fetching book details:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
