import jwt, { JwtPayload } from "jsonwebtoken"
import { env } from "../config/env";

interface AuthPayload extends JwtPayload {
  userId: string;
}


export const generateToken = (userId: string) => {

  const payload = { userId };
  const secretKey = env.JWT_SECRET!;

  return jwt.sign(payload, secretKey, { expiresIn: "7d" })

};

export const verifyToken = (token: string) => {

  const secretKey = env.JWT_SECRET!;

  return jwt.verify(token, secretKey) as AuthPayload;

};