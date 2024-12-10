import dbConnect from "@/db/config";
import { checkBlacklist } from "@/middlewares/blacklist";
import genre from "@/models/genre";

export default async function handler(req, res) {
    await dbConnect();
    await checkBlacklist(req, res);
    try {
        const data = await genre.find();
        if (data.length) {
            res.status(200).json({ message: "Genres fetched successfully!", data });
        } else {
            res.status(404).json({ message: "No record found!" });
        }
    } catch (error) {
        console.error("Error fetching genres:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
