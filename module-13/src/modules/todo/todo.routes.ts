import { Router } from "express";
import { todoControllers } from "./todo.controller";

const router = Router();

//* post a todos data in db
router.post("/", todoControllers.createTodo);

//* get all todos data from db
router.get("/", todoControllers.getAllTodos);

//* get a specific todos data
router.get("/:id", todoControllers.getSingleTodo);

//* update a todo data in db
router.put("/:id", todoControllers.updateTodo);

//* delete a todo data in db
router.delete("/:id", todoControllers.deleteTodo);

export const todoRoutes = router;
