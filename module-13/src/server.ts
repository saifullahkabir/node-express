import express, { NextFunction, Request, Response } from "express";
import config from "./config";
import initDB, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";
import { todoRoutes } from "./modules/todo/todo.routes";

const app = express();
const port = config.port;

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



//* not found route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found!",
    path: req.path,
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
