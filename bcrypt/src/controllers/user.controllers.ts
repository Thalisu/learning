import { Request, Response } from "express";
import { UserService } from "../services/user.services";

export class UserControllers {
  static async login(req: Request, res: Response) {
    const response = UserService.login(req.body);
    return res.status(200).json(response);
  }

  static async register(req: Request, res: Response) {
    const response = UserService.register(req.body);

    return res.status(201).json(response);
  }

  static getUser(req: Request, res: Response) {
    const user = UserService.getUser();
    return res.status(200).json(user);
  }
}
