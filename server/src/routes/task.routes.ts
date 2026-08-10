import { Router } from "express";
import { createTask, getTasks, deleteTask, updateTask, getTasksByWorkspace } from "../controllers/task.controller";

console.log("deleteTask:", deleteTask)

const router = Router();

router.get("/", getTasks)

router.post("/workspace/:workspaceId", createTask)

router.delete("/:id", deleteTask)

router.patch("/:id", updateTask)

router.get("/workspace/:workspaceId/tasks", getTasksByWorkspace);

export default router;