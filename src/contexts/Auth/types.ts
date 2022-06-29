export type User = {
  id?: number;
  name?: string;
  email?: string;
  token?: string;
  password?: string;
};

export interface IContext extends User {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
