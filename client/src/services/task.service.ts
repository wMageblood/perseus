import type { ITask, ITaskPayload } from "../types/task";

const API_URL = "http://localhost:3000/api/task";

export const getTasks = async (workspaceId: string): Promise<ITask[]> => {

  const response = await fetch(`${API_URL}/workspace/${workspaceId}/tasks`, {
    credentials: "include",
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tasks")
  }

  return response.json();
};

export const deleteTask = async (id: string, workspaceId: string) => {

  const response = await fetch(
    `${API_URL}/workspace/${workspaceId}/${id}`,
    {
      method: "DELETE",
      credentials: "include",
    }
  );

  if (!response.ok) {
    throw new Error("Failed deleting task");
  }
};

export const createTask = async (taskData: ITaskPayload) => {

  const response = await fetch(`${API_URL}/workspace/${taskData.workspaceId}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData)
  })

  if (!response.ok) {
    throw new Error("Failed creating task")
  }

  const data = await response.json()

  return data;

};


export const updateTask = async (id: string, taskData: ITaskPayload, workspaceId: string) => {

  const response = await fetch(`${API_URL}/workspace/${workspaceId}/${id}`,
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData)
    })

    if (!response.ok) {
      const error = await response.json();
      console.log(error)


      throw new Error("Failed while updating tasks")
    }

    const data = await response.json()
    return data.task;
};