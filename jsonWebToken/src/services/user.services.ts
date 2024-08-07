import { getSecret } from "../config";
import jwt from "jsonwebtoken";
import { IUser } from "../interfaces/user.interface";

export class UserService {
  static login() {
    const secret = getSecret();
    const token = jwt.sign({ id: 1 }, secret, { expiresIn: "24h" });
    return token;
  }

  static getUser(): IUser {
    const user = { id: 1, name: "thalisu", email: "thalison@gmail.com" };
    return user;
  }
}
