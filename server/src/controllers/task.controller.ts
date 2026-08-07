import { Request, Response } from "express";
import { Types } from "mongoose";
import { Task } from "../models/Task";

export const createTask = async (req: Request, res: Response) => {

  const { workspacesId } = req.params

  const {
    title,
    description,
    assignedTo,
    priority,
    dueDate,
    department
  } = req.body;

  const task = await Task.create({
    workspaceId: new Types.ObjectId(workspacesId as string),
    title,
    description,
    assignedTo,
    priority,
    dueDate,
    department,
  });

  res.status(201).json(task);
};

export const getTasks = async (req: Request, res: Response) => {

  const { workspaceId } = req.params

  try {
    const tasks = await Task.find({workspaceId: workspaceId});

    const formattedTasks = tasks.map((task) => ({
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
    }));

    res.status(200).json(formattedTasks);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error fetching tasks",
    })
  }

};

export const getTasksByWorkspace = async ( req: Request, res: Response ) => {
  const { workspaceId } = req.params;

  try {
    const tasks = await Task.find({
      workspaceId,
    });

    const formattedTasks = tasks.map((task) => ({
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
    }));

    res.status(200).json(formattedTasks);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error fetching tasks",
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {

  try {

    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.status(200).json({
      message: "Task deleted successfully",
      task: deletedTask
    });

  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Error deleting task"
    });
  }

};

export const updateTask = async (req: Request, res: Response) => {

  try {

    const { id } = req.params;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({
        message: "The task you're looking for, wasn't found."
      });
    }

    res.status(200).json({
      message: "Task was updated successfully",
      task: updatedTask
    })

  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Error updating task"
    })
  }

};