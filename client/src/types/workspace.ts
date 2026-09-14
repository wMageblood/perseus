import type { IUser } from "./user";

export type WorkspaceRole = "owner" | "admin" | "member";
export type WorkspaceColor = "blue" | "green" | "red" | "yellow"
export type WorkspaceIcon = "doggy" | "kitty" | "taskit" | "lildashboard"

export interface IWorkspaceMembers {
  user: IUser,
  role: WorkspaceRole
};

export interface IWorkspace {
  id: string,
  name: string,
  owner: string,
  members: IWorkspaceMembers[],
  color: WorkspaceColor,
  icon: WorkspaceIcon,
  createdAt: Date,
  updatedAt: Date,
};

export interface IWorkspacePayload {
  name: string,
  color: WorkspaceColor,
  icon: WorkspaceIcon,
};