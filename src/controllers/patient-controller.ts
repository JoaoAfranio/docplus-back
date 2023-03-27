import { Request, Response } from "express";

export async function getPatients(req: Request, res: Response) {
  return res.status(200).send("patients list...");
}
