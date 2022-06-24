import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    // return {
    //   user: { id: 3, name: "Teste", email: "teste@gmail.com" },
    //   token: "12345678",
    // };
    const response = await api.post("/auth/login", { token });
    return response.data;
  },
  signin: async (email: string, password: string) => {
    // return {
    //   user: { id: 3, name: "Teste", email: "teste@gmail.com" },
    //   token: "12345678",
    // };
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  },

  logout: async () => {
    return { status: true };
    const response = await api.post("/logout");
    return response.data;
  },
});
