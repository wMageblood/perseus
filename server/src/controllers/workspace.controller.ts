import { Request, Response } from "express";
import { Workspace } from "../models/Workspace";


export const createWorkspace = async (req: Request, res: Response) => {

  console.log("REQ.USER", req.user);

  console.log("check fi alive")

  const {
    name,
    color,
    icon
  } = req.body

  const userId = req.user?.id

  console.log("REQ.USER", userId);

  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized",
    })
  }

  const workspace = await Workspace.create({
    name,
    color,
    icon,
    owner: userId,
    members: [
      {
        user: userId,
        role: "owner"
      },
    ],
  });

  res.status(201).json({
    message: "Workspace created successfully",
    workspace: {
      id: workspace._id,
      name: workspace.name,
      owner: workspace.owner,
      members: workspace.members,
      color: workspace.color,
      icon: workspace.icon,
      createdAt: workspace.createdAt,
      updatedAt: workspace.updatedAt,
    }
  })
};


export const getWorkspaces = async (req: Request, res: Response) => {

  try {

    const workspaces = await Workspace.find();

    const formattedWorkspaces = workspaces.map((workspace) => ({
      id: workspace._id,
      name: workspace.name,
      owner: workspace.owner,
      members: workspace.members,
      color: workspace.color,
      icon: workspace.icon,
      createdAt: workspace.createdAt,
      updatedAt: workspace.updatedAt,
    }));

    res.status(200).json(formattedWorkspaces);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error fetching workspaces"
    })
  }

};

export const deleteWorkspace = async (req: Request, res: Response) => {

  try {

    const { id } = req.params;

    const deletedWorkspace = await Workspace.findByIdAndDelete(id);

    if (!deletedWorkspace) {
      return res.status(404).json({
        message: "Workspace not found"
      });
    }

    res.status(200).json({
      message: "Workspace deleted successfully",
      workspace: deletedWorkspace
    });

  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: "Error deleting workspace"
    })
  }

};

export const updateWorkspace = async (req: Request, res: Response) => {

  try {

    const { id } = req.params

    const updatedWorkspace = await Workspace.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );


    if ( !updatedWorkspace ) {
      return res.status(404).json({
        message: "The workspace you're looking for, wasn't found."
      });
    }

    const formattedWorkspace = {
      id: updatedWorkspace._id,
      name: updatedWorkspace.name,
      owner: updatedWorkspace.owner,
      members: updatedWorkspace.members,
      color: updatedWorkspace.color,
      icon: updatedWorkspace.icon,
      createdAt: updatedWorkspace.createdAt,
      updatedAt: updatedWorkspace.updatedAt,
    };

    res.status(200).json({
      message: "Workspace was updated successfully.",
      workspace: formattedWorkspace
    })

  } catch ( error ) {
    console.error(error)

    res.status(500).json({
      message: "Error updating workspace"
    })
  }

};