import { Router } from "express";
import { createWorkspace, deleteWorkspace, getWorkspaces, updateWorkspace } from "../controllers/workspace.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authenticate, createWorkspace)

router.get("/", authenticate, getWorkspaces)

router.delete("/:id", authenticate, deleteWorkspace)

router.patch("/:id", authenticate, updateWorkspace)

export default router;