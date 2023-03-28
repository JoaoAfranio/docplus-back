import { AuthenticatedRequest } from "@/middlewares";
import patientService, { CreateOrUpdatePatientParams } from "@/services/patient-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getAllPatients(req: AuthenticatedRequest, res: Response) {
  try {
    const patients = await patientService.getAllPatients();

    return res.status(httpStatus.OK).send(patients);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function createOrUpdatePatient(req: AuthenticatedRequest, res: Response) {
  const patient = req.body as CreateOrUpdatePatientParams;

  try {
    await patientService.createOrUpdatePatient(patient);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error);
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}

export async function deletePatient(req: AuthenticatedRequest, res: Response) {
  const { id } = req.params;

  try {
    await patientService.deletePatient(Number(id));
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
