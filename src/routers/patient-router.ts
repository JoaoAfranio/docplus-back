import { getPatients } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const patientRouter = Router();

patientRouter.all("/*", authenticateToken).get("", getPatients);

export { patientRouter };
