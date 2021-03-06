import { createContext } from "react";
import { User } from "../../types/User";
import { IContext } from "./types";

export type AuthContextType = {
  user: User | null;
  signin: (username: string, password: string) => Promise<boolean>;
  signout: () => void;
};
export const AuthContext = createContext<IContext>({} as IContext);
