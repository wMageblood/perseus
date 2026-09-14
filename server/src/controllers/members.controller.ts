import { Request, Response } from "express";
import { Workspace } from "../models/Workspace";
import { IUser } from "../models/User";

export const getMembers = async (req: Request, res: Response) => {

  const { workspaceId } = req.params

  try {

    const actualWorkspace = await Workspace.findById(workspaceId).populate("members.user");

    if (!actualWorkspace) {
      return res.status(404).json({
        message: "Member's workspace hasn't been found."
      })
    };

    const formattedActualWorkspace = actualWorkspace.members.map((member) => {
      const { username, globalName, avatar, _id} = member.user as unknown as IUser & { _id: string };

      return {
        role: member.role,
        user: {
          id: _id,
          username,
          globalName,
          avatar
        }
      };
    });

    res.status(200).json(actualWorkspace.members);

  } catch ( error ) {
    console.error(error);

    res.status(500).json({
      message: "Error fetching members",
    })
  }
};