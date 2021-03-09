import { Request, Response } from "express";
import { res404IfUndefined } from "../core/decorators";
import { IUser } from "./interfaces/IUser.interface";
import UserData from "./data.json";

/**
 * Users list view
 * Returns a list of users
 */
const list = (req: Request, res: Response): void => {
  res.send(UserData);
};

/**
 * User detail view
 * Returns an user if matched, 404 otherwise
 */
const detail = res404IfUndefined("User not found")(
  (req: Request, res: Response): any => {
    return UserData.filter((u: IUser) => u.id === parseInt(req.params.id))[0];
  }
);

export { list, detail };
