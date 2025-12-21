import express, { Request, Response } from "express";
import initDB from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";
import { todoRoutes } from "./modules/todo/todo.routes";
import { authRoutes } from "./modules/auth/auth.routes";

const app = express();

// parser
app.use(express.json());

// initializing DB
initDB();

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello next level developers!");
});

//* users CRUD
app.use("/users", userRoutes);

//* TODOS CRUD
app.use("/todos", todoRoutes);

//* auth routes
app.use("/auth", authRoutes);

//* not found route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found!",
    path: req.path,
  });
});

export default app;
