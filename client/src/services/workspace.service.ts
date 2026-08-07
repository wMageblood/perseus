import type { IWorkspace, IWorkspacePayload } from "../types/workspace";

const API_URL = "http://localhost:3000/api/workspace";

export const createWorkspace = async ( workspaceData: IWorkspacePayload ) => {

  const response = await fetch(`${API_URL}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(workspaceData),
  });

  if (!response.ok) {
    throw new Error("Failed creating workspace");
  }

  const data = await response.json();

  return data.workspace;
};

export const getWorkspaces = async (): Promise<IWorkspace[]> => {
  const response = await fetch("http://localhost:3000/api/workspace", {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed fetching workspaces");
  }

  const data = await response.json();

  return data;
};

export const deleteWorkspace = async (id: string) => {

  console.log("DELETING:", id)

  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  console.log("STATUS:", response.status)

  if (!response.ok) {
    throw new Error("Failed deleting workspace")
  }
};

export const updateWorkspace = async (id: string, workspaceData: IWorkspacePayload) => {

  const response = await fetch(`${API_URL}/${id}`,
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workspaceData)
    })

    if ( !response.ok ) {
      const error = await response.json()
      console.log(error)

      throw new Error("Failed while updating workspace")
    }

    const data = await response.json()

    return data.workspace;
};