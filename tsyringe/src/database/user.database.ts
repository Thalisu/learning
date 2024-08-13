import { IUser } from "../interfaces/user.interface";

let id = 0;

export const generateId = () => {
  id++;
  return id;
};

export const userDatabase: IUser[] = [];
