import { Router } from "express";
import { createTask, deleteTask, updateTask, getTasksByWorkspace } from "../controllers/task.controller";
import { authenticate } from "../middleware/auth.middleware";
import { verifyRole } from "../middleware/verifyRole.middleware";
import { verifyMembership } from "../middleware/verifyMembership.middleware";

const router = Router();

router.get("/workspace/:workspaceId/tasks", authenticate, verifyMembership, getTasksByWorkspace);

router.post("/workspace/:workspaceId", authenticate, verifyRole, createTask)

router.patch("/workspace/:workspaceId/:id", authenticate, verifyRole, updateTask)

router.delete("/workspace/:workspaceId/:id", authenticate, verifyRole, deleteTask)

export default router;