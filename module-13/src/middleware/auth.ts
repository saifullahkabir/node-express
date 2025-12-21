import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import config from "../config";

// higher order function return

const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        return res.status(401).json({ message: "You are not allowed!!!" });
      }
      const decoded = jwt.verify(token, config.jwtSecret as string) as JwtPayload;
      console.log({decoded});
      req.user = decoded;

      if(roles.length && !roles.includes(decoded.role as string)){
        return res.status(403).json({
          error: "unauthorized!!!",
        })
      }

      next();

    } catch (err: any) {
      res.status(403).json({
        success: false,
        message: err.message,
      });
    }
  };
};

export default auth;
