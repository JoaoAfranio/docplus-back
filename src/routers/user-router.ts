import { createUser } from "@/controllers";
import { validateBody } from "@/middlewares";
import { createUserSchema } from "@/schemas/user-schemas";
import { Router } from "express";

const userRouter = Router();

userRouter.post("", validateBody(createUserSchema), createUser);

export { userRouter };
