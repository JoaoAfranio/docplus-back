import patientRepository from "@/repositories/patient-repository";
import { Patient, Prisma } from "@prisma/client";

export async function getAllPatients() {
  const patients = await patientRepository.findAll();

  return patients;
}

export async function createOrUpdatePatient(newPatient: CreateOrUpdatePatientParams) {
  const patient = await patientRepository.upsert(newPatient);
  return patient;
}

export async function deletePatient(id: number) {
  const deletedPatient = await patientRepository.deletePatient(id);
  return deletedPatient;
}

const patientService = {
  getAllPatients,
  createOrUpdatePatient,
  deletePatient,
};

export default patientService;

export type CreateOrUpdatePatientParams = Prisma.PatientUncheckedCreateInput;
