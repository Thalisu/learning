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
import { injectable } from "tsyringe";

@injectable()
export class UserServices {
  async login(body: TUserLoginBody) {
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

    return { accessToken: token, user: { name: user.name } };
  }

  async register(body: TUserRegisterBody) {
    const hashPassword = await bcrypt.hash(body.password, 10);

    const newUser = {
      id: generateId(),
      name: body.name,
      email: body.email,
      password: hashPassword,
    };

    userDatabase.push(newUser);

    return { name: newUser.name, email: newUser.email };
  }

  getUser() {
    const users = userDatabase;
    return users;
  }
}
