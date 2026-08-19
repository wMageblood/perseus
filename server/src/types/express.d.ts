import { IAuthenticatedUser } from "../models/User";
import { IWorkspaceMember } from "../models/Workspace";

declare global {
  namespace Express {
    interface Request {
      user?: IAuthenticatedUser;
      member?: IWorkspaceMember;
    }
  }
}