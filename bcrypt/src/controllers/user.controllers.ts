import { Request, Response } from "express";
import { UserService } from "../services/user.services";

export class UserControllers {
  static login(req: Request, res: Response) {
    const response = UserService.login();
    return res.status(200).json(response);
  }

  static getUser(req: Request, res: Response) {
    const user = UserService.getUser();
    return res.status(200).json(user);
  }
}
