import { Router } from "express";
import { addMember, createWorkspace, deleteWorkspace, getWorkspaces, updateWorkspace } from "../controllers/workspace.controller";
import { authenticate } from "../middleware/auth.middleware";
import { verifyRole } from "../middleware/verifyRole.middleware";

const router = Router();

router.post("/", authenticate, createWorkspace)

router.get("/", authenticate, getWorkspaces)

router.delete("/:id", authenticate, deleteWorkspace)

router.patch("/:id", authenticate, updateWorkspace)

router.post("/:workspaceId/members", authenticate, verifyRole, addMember)

export default router;