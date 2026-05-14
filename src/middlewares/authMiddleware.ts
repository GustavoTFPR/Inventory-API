import type { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../helpers/apiError.js";
import jwt from "jsonwebtoken";
import { UserRole } from "../entity/User.js";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) throw new UnauthorizedError("Token não fornecido");

  const token = authorization.split(" ")[1];
  
};