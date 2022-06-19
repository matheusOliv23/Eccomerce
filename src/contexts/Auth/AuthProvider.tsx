import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const validateToken = async () => {
      const storagedata = localStorage.getItem("authtoken");
      if (storagedata) {
        const data = await api.validateToken(storagedata);
        if (data.user) {
          setUser(data.user);
        }
      }
    };
    validateToken();
  }, [api]);

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };

  const signout = async () => {
    await api.logout();
    setUser(null);
    setToken("");
  };

  const setToken = (token: string) => {
    localStorage.setItem("authtoken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
