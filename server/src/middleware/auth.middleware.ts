import { Request, Response, NextFunction } from "express"
import { verifyToken } from "../services/jwt.service";
import { User } from "../models/User";

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "No token provided"
    });
  }

  const payload = verifyToken(token);

  if (!payload) {
    return res.status(401).json({
      message: "Invalid token"
    });
  }

  const user = await User.findById(payload.userId);

  if (!user) {
    return res.status(401).json({
      message: "User not found"
    });
  }

  req.user = user;

  next();
};