import dbConnect from "@/db/config";
import blacklist from "@/models/blacklist";

export default async function handler(req, res) {
    if (req.method === "POST") {
        await dbConnect();
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res.status(400).json({ message: "Token is required" });
            }
            const isBlacklisted = await blacklist.findOne({ token });
            if (!isBlacklisted) {
                await blacklist.create({ token }); // Add token to blacklist
            }
            res.status(200).json({ message: "User logged out successfully!" });
        } catch (error) {
            console.error("Error during logout:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
