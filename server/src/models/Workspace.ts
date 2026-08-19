import { Schema, model, Types } from "mongoose";

export type WorkspaceRole = "owner" | "admin" | "member";
export type WorkspaceColor = "blue" | "green" | "red" | "yellow"
export type WorkspaceIcon = "doggy" | "kitty" | "taskit" | "lildashboard"

export interface IWorkspaceMember {
  user: Types.ObjectId,
  role: WorkspaceRole,
};

export interface IWorkspace {
  name: string;
  owner: Types.ObjectId;
  members: IWorkspaceMember[];
  color: WorkspaceColor;
  icon: WorkspaceIcon;
  createdAt: Date;
  updatedAt: Date;
};


const WorkspaceSchema = new Schema<IWorkspace>(
  {

    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 120,
      trim: true,
    },

    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    members: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        role: {
          type: String,
          enum: ["owner", "admin", "member"],
          required: true
        }
      }
    ],

    color: {
      type: String,
      enum: ["blue", "green", "red", "yellow"],
      required: true,
    },

    icon: {
      type: String,
      enum: ["doggy", "kitty", "taskit", "lildashboard"],
      required: true,
    },

  },
  {
    timestamps: true,
  }
);

export const Workspace = model<IWorkspace>("Workspace", WorkspaceSchema);