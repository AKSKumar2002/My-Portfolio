import fs from "fs";
import { join } from "path";

let portfolioDataCache = null; // In-memory cache for production mode

export default function handler(req, res) {
  const portfolioDataPath = join(process.cwd(), "/data/portfolio.json");

  if (req.method === "POST") {
    try {
      if (process.env.NODE_ENV === "development") {
        // Write to file in development mode
        fs.writeFileSync(portfolioDataPath, JSON.stringify(req.body, null, 2), "utf-8");
        res.status(200).json({ message: "Data saved successfully!" });
      } else {
        // Use in-memory cache in production mode
        portfolioDataCache = req.body;
        res.status(200).json({ message: "Data saved successfully in production mode!" });
      }
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ error: "Failed to save data." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
