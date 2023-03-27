import { getPatients } from "@/controllers";
import { Router } from "express";

const patientRouter = Router();

patientRouter.get("", getPatients);

export { patientRouter };
