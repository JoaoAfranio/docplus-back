import userRepository from "@/repositories/user-repository";
import { User } from "@prisma/client";
import { duplicatedEmailError } from "./errors";
import bcrypt from "bcrypt";

export async function createUser({ email, password }: CreateUserParams) {
  await validateUniqueEmail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  return userRepository.create({
    email,
    password: hashedPassword,
  });
}

async function validateUniqueEmail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

export type CreateUserParams = Pick<User, "email" | "password">;

const userService = {
  createUser,
};

export * from "./errors";
export default userService;
