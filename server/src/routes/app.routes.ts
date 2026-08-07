import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.get("/dashboard", authenticate, (req, res) => {
  res.send("contenido privado");
});

export default router;