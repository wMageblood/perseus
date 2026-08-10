import { Request, Response, NextFunction } from "express";
import { Workspace } from "../models/Workspace";

export const verifyRole = async (req: Request, res: Response, next: NextFunction) => {

  const workspaceId = req.params.workspaceId;

  if (!workspaceId) {
    return res.status(401).json({
      message: "Invalid workspaceId."
    })
  };

  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({
      message: "Invalid userId."
    })
  };

  const workspace = await Workspace.findById(workspaceId)

  if (!workspace) {
    return res.status(401).json({
      message: "Workspace not found."
    })
  };

  const member = workspace?.members.find((m) => m.user.toString() === userId)

  if (!member) {
    return res.status(401).json({
      message: "You shouldnt be here."
    })
  };

  if (!(member.role === "owner" || member.role === "admin")) {
    return res.status(403).json({
      message: "You are not allowed here."
    })
  };

  next();
};