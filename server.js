const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const LOG_FILE = path.join(__dirname, "logs.json");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ===== Utilities =====
function readLogs() {
  if (!fs.existsSync(LOG_FILE)) return [];
  return JSON.parse(fs.readFileSync(LOG_FILE, "utf8"));
}

function saveLogs(logs) {
  fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));
}

// ===== Routes =====
app.post("/log", (req, res) => {
  const { event } = req.body;
  if (!event) return res.status(400).json({ error: "Invalid payload" });

  const logs = readLogs();
  logs.unshift({
    event,
    timestamp: new Date().toLocaleString()
  });

  if (logs.length > 10) logs.pop();

  saveLogs(logs);
  res.json({ status: "saved" });
});

app.get("/logs", (req, res) => {
  res.json(readLogs());
});

// ===== Start Server =====
app.listen(PORT, () => {
  console.log(`SecureIT server running on port ${PORT}`);
});
