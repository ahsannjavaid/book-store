import dbConnect from "@/db/config";
import { checkBlacklist } from "@/middlewares/blacklist";
import author from "@/models/author";
import book from "@/models/book";

export default async function handler(req, res) {
    await dbConnect();
    await checkBlacklist(req, res);
    const id = req.query.id;
    try {
        let data = await author.findById(id);
        if (data) {
            const books = await book.find({ authorId: id });
            const finalData = { ...data._doc, books }
            res.status(200).json({ message: "Author details fetched successfully!", data: finalData });
        } else {
            res.status(404).json({ message: "This author does not exist!" });
        }
    } catch (error) {
        console.error("Error fetching author details:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
