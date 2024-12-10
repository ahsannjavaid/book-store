import dbConnect from "@/db/config";
import { checkBlacklist } from "@/middlewares/blacklist";
import author from "@/models/author";

export default async function handler(req, res) {
  await dbConnect();
  await checkBlacklist(req, res);
  try {
    const data = await author.find();
    if (data.length) {
      res.status(200).json({ message: "Authors fetched successfully!", data });
    } else {
      res.status(404).json({ message: "No record found!" });
    }
  } catch (error) {
    console.error("Error fetching authors:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
