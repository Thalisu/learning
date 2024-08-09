import { getSecret } from "../config";
import jwt from "jsonwebtoken";
import {
  IUser,
  TUserLoginBody,
  TUserRegisterBody,
} from "../interfaces/user.interface";
import { generateId, userDatabase } from "../database/user.database";
import bcrypt from "bcrypt";
import { AppError } from "../errors/appError";
import { access } from "fs";

export class UserService {
  static async login(body: TUserLoginBody) {
    const secret = getSecret();
    const token = jwt.sign({ id: 1 }, secret, { expiresIn: "24h" });

    const user = userDatabase.find((user) => user.email === body.email);

    if (!user) {
      throw new AppError("User not found", 404);
    }

    const compare = await bcrypt.compare(body.password, user?.password);

    if (!compare) {
      throw new AppError("Incorrect password", 403);
    }

    return { accessToken: token, user };
  }

  static async register(body: TUserRegisterBody) {
    const hashPassword = await bcrypt.hash(body.password, 10);

    const newUser = {
      id: generateId(),
      name: body.name,
      email: body.email,
      password: hashPassword,
    };

    userDatabase.push(newUser);

    return newUser;
  }

  static getUser() {
    const user = { id: 1, name: "thalisu", email: "thalison@gmail.com" };
    return user;
  }
}
