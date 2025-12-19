import { Request, Response, Router } from "express";
import { pool } from "../../config/db";
import { userControllers } from "./user.controller";

const router = Router();

// routes => controller => services

//* save a user data in db
router.post("/", userControllers.createUser);

//* get all users data
router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);

    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: result.rows,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      details: err,
    });
  }
});

export const userRoutes = router;
