import { useAuth } from "../../hooks/useAuth";
import Login from "../../pages/login";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <Login />;
  }

  return children;
};
