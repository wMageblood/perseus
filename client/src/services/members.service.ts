import type { IWorkspaceMembers } from "../types/workspace";

const API_URL = "http://localhost:3000/api/workspace";

export const getMembers = async (workspaceId: string): Promise<IWorkspaceMembers[]> => {

  const response = await fetch(`${API_URL}/${workspaceId}/members`, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch members")
  }

  return response.json()

};