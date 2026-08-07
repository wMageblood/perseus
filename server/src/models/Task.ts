import { Schema, Types, model } from "mongoose";

export type Priority = "Low" | "Medium" | "High";
export type TaskStatus = "Pending" | "In progress" | "Completed";
export type Department = "Frontend" | "Backend";

export interface ITask {
  workspaceId: Types.ObjectId;
  title: string;
  description: string;
  assignedTo: string | null;
  priority: Priority;
  status: TaskStatus;
  department: Department;
  createdBy: string;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
};

const TaskSchema = new Schema<ITask>(
  {
    workspaceId: {
      type: Schema.Types.ObjectId,
      ref: "Workspace",
      required: true,
    },

    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 120,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 1000,
      trim: true,
    },

    assignedTo: {
      type: String,
      default: null,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },

    status: {
      type: String,
      enum: ["Pending", "In progress", "Completed"],
      default: "Pending",
    },

    department: {
      type: String,
      enum: ["Frontend", "Backend"],
      required: true,
    },

    createdBy: {
      type: String,
      default: "Perseus",
      required: true,
    },

    dueDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Task = model<ITask>("Task", TaskSchema);