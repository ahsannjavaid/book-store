import dbConnect from "@/db/config";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import user from "@/models/user";

export default async function handler(req, res) {
    if (req.method === "POST") {
        await dbConnect();
        try {
            const userExists = await user.findOne({ email: req.body.email });
            if (userExists) {
                const isAuthenticated = await bcrypt.compare(req.body.password, userExists.password);
                if (isAuthenticated) {
                    const token = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET, { expiresIn: "7d" });
                    res.status(200).json({
                        message: "User logged in successfully!",
                        token
                    });
                } else {
                    res.status(401).json({
                        message: "Wrong password!"
                    });
                }
            } else {
                res.status(404).json({
                    message: "User not found. Please signup!"
                });
            }
        } catch (error) {
            console.error("Error logging in:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
