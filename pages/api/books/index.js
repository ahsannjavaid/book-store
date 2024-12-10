import dbConnect from "@/db/config";
import { checkBlacklist } from "@/middlewares/blacklist";
import book from "@/models/book";

export default async function handler(req, res) {
    await dbConnect();
    await checkBlacklist(req, res);
    try {
        const data = await book.find();
        if (data.length) {
            res.status(200).json({ message: "Books fetched successfully!", data });
        } else {
            res.status(404).json({ message: "No record found!" });
        }
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
