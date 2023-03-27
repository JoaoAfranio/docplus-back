import { getPatients } from "@/controller";
import { Router } from "express";

const patientRouter = Router();

patientRouter.get("", getPatients);

export { patientRouter };
