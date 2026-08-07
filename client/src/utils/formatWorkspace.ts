import type { IWorkspace } from "../types/workspace";

export const formatWorkspace = (workspace: any): IWorkspace => {

  console.log("BEFORE FORMAT:", workspace);

  return {
    id: workspace.id,
    name: workspace.name,
    owner: workspace.owner,
    members: workspace.members,
    color: workspace.color,
    icon: workspace.icon,
    createdAt: workspace.createdAt,
    updatedAt: workspace.updatedAt
  }
};