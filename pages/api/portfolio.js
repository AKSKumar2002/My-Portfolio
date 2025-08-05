export default function handler(req, res) {
  if (req.method === "POST") {
    const updatedData = req.body;
    console.log("Received Data:", updatedData); // Debugging line

    // Save the data (e.g., write to a file or database)
    // Example for file-based storage:
    const fs = require("fs");
    const path = require("path");
    const filePath = path.join(process.cwd(), "data", "portfolio.json");

    fs.writeFile(filePath, JSON.stringify(updatedData, null, 2), (err) => {
      if (err) {
        console.error("Error saving data:", err);
        return res.status(500).json({ error: "Failed to save data" });
      }
      res.status(200).json({ message: "Data saved successfully" });
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
