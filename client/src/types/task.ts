export type Department = "Backend" | "Frontend";
export type Priority = "High" | "Medium" | "Low";
export type TaskStatus = "Pending" | "In progress" | "Completed";

export interface ITask {
  id: string,
  title: string,
  description: string,
  department: string,
  workspaceId: string,
  createdBy: string,
  assignedTo: string | null | undefined,
  priority: Priority,
  status: TaskStatus,
  dueDate: string,
  createdAt: Date,
  updatedAt: Date,
};

export interface ITaskPayload {
  title: string;
  description: string;
  department: string;
  priority: string;
  assignedTo: string;
  dueDate: string;
}