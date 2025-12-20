import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import config from "../config";

// higher order function return

const auth = () => {
  return (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(500).json({ message: "You are not allowed!!!" });
    }
    const decoded = jwt.verify(token, config.jwtSecret as string);
    console.log({decoded});
    next();
  };
};

export default auth;
