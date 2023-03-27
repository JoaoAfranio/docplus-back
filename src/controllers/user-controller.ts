import { Request, Response } from "express";
import userService from "@/services/user-service";
import httpStatus from "http-status";

export async function createUser(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await userService.createUser({ email, password });
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    if (error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    console.log(error);
    res.sendStatus(500);
  }
}
