import blacklist from "@/models/blacklist";

export const checkBlacklist = async (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlacklisted = await blacklist.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({ message: "Token is invalid or expired" });
    }
};