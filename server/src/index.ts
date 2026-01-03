import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import agentRoutes from "./routes/agent";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/agent", agentRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Agent server running on http://localhost:${PORT}`);
});