import fs from "fs";
import { join } from "path";

export default function handler(req, res) {
  const portfolioData = join(process.cwd(), "/data/portfolio.json");

  if (req.method === "POST") {
    try {
      fs.writeFileSync(portfolioData, JSON.stringify(req.body, null, 2), "utf-8");
      res.status(200).json({ message: "Data saved successfully!" });
    } catch (error) {
      console.error("Error writing to file:", error);
      res.status(500).json({ error: "Failed to save data." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
