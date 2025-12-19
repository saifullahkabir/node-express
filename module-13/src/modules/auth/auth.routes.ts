import { Router } from "express";
import { authControllers } from "./auth.controller";

const router = Router();

// http://localhost:5000/auth/login
router.post("/login", authControllers.loginUser);

export const authRoutes = router;
