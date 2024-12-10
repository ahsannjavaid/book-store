import dbConnect from "@/db/config";
import { getEmail } from "@/helper";
import { checkBlacklist } from "@/middlewares/blacklist";
import history from "@/models/history";

export default async function handler(req, res) {
    await dbConnect();
    await checkBlacklist(req, res);
    const token = req.headers.authorization;
    const email = getEmail(token);
    if (req.method === "POST") {
        try {
            await history.create({ search: req.body.search, userEmail: email });
            res.status(200).json({ message: "Search saved successfully!" });
        } catch (error) {
            console.error("Error saving search:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    } else if (req.method === "GET") {
        try {
            const data = await history.find({ userEmail: email }).select("search");
            res.status(200).json({ message: "User searches fetched successfully!", data });
        } catch (error) {
            console.error("Error fetching user searches:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
