import { Router } from "express";
import { runAgent } from "../agent/agent";

const router = Router();

router.post("/run", async (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ error: "task is required" });
  }

  try {
    const result = await runAgent(task);
    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "agent failed" });
  }
});

export default router;