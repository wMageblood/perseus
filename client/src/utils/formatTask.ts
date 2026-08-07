import type { ITask } from "../types/task";

export const formatTask = (task: any): ITask => {

  console.log("BEFORE FORMAT:", task);

  return {
    id: task._id,
    title: task.title,
    description: task.description,
    assignedTo: task.assignedTo,
    priority: task.priority,
    status: task.status,
    createdBy: task.createdBy,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
    dueDate: task.dueDate,
    department: task.department,
    workspaceId: task.workspaceId,
  };
};