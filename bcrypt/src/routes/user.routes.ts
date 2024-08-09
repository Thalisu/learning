import { Router } from "express";
import { UserControllers } from "../controllers/user.controllers";
import { verifyToken } from "../middleware/verifyToken.middleware";

const userRouter = Router();

userRouter.post("/login", UserControllers.login);
userRouter.get("/", verifyToken.execute, UserControllers.getUser);

export default userRouter;
