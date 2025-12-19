import { Request, Response, Router } from "express";
import { userControllers } from "./user.controller";

const router = Router();

// routes => controller => services

//* save a user data in db
router.post("/", userControllers.createUser);

//* get all users data
router.get("/", userControllers.getAllUsers);

//* get a specific user data
router.get("/:id", userControllers.getSingleUser);

//* udate a user data in db
router.put("/:id", userControllers.updateUser);

//* delete a user data in db
router.delete("/:id", userControllers.deleteUser);

export const userRoutes = router;
