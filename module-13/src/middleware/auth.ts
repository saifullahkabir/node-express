import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import config from "../config";

// higher order function return

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(500).json({ message: "You are not allowed!!!" });
      }
      const decoded = jwt.verify(token, config.jwtSecret as string);
      
      req.user = decoded as JwtPayload;
      next();

    } catch (err: any) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  };
};

export default auth;
