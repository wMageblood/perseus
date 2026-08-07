import type { ITask, ITaskPayload } from "../types/task";

const API_URL = "http://localhost:3000/api/task";

export const getTasks = async (workspaceId: string): Promise<ITask[]> => {

  const response = await fetch(`${API_URL}/workspace/${workspaceId}/tasks`);

  if (!response.ok) {
    throw new Error("Failed to fetch tasks")
  }

  return response.json();
};

export const deleteTask = async (id: string) => {

  const response = await fetch(
    `${API_URL}/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed deleting task");
  }
};

export const createTask = async (taskData: ITaskPayload) => {

  const response = await fetch(`${API_URL}`, {
    method: "POST",
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


export const updateTask = async (id: string, taskData: ITaskPayload) => {

  const response = await fetch(`${API_URL}/${id}`,
    {
      method: "PATCH",
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