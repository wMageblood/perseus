import { IAuthenticatedUser } from "../models/User";

declare global {
  namespace Express {
    interface Request {
      user?: IAuthenticatedUser;
    }
  }
}