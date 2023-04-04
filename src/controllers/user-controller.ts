import { Request, Response } from "express";
import userService from "@/services/user-service";
import httpStatus from "http-status";

export async function createUser(req: Request, res: Response) {
  const user = req.body;
  try {
    const newUser = await userService.createOrUpdateUser(user);
    return res.status(httpStatus.CREATED).json({
      id: newUser.id,
      email: newUser.email,
    });
  } catch (error) {
    if (error.name === "DuplicatedEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    console.log(error);
    res.sendStatus(500);
  }
}
