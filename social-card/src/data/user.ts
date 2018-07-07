import { IUser } from "./user-interface";

class User implements IUser {
  public headline: string;
  public name: string;
  public message: string;
  public url: string;
  public urlDisplayName: string;
}

export default User;
