import { createContext, useEffect } from "react";
import type { IUser } from "../types/user";
import { useState } from "react";
import { handleLogout } from "../services/auth.service";

type AuthContextType = {
  user: IUser | null,
  loading: boolean;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode}) => {

  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const logout = async () => {

    await handleLogout();

    setUser(null)
  };

  useEffect(() => {

    const checkAuth = async () => {

      try {

        const response = await fetch("http://localhost:3000/auth/me",
          {
            credentials: "include"
          }
        );

        if (!response.ok) {
          setUser(null);
          return
        };

        const user = await response.json();
        setUser(user);

      } catch (error) {

          console.error(error);
          setUser(null);

      } finally {

          setLoading(false);

      };
    };

    checkAuth()

  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};