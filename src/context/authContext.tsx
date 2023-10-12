import * as React from "react";
import {
  AuthContextType,
  ISession,
  IUser,
  AuthContextStorageType,
} from "./auth";

export const AuthContext = React.createContext<AuthContextType | null>(null);

export const CONTEXT_STORAGE_KEY = "auth";

export const getStorageContext = () => {
  const raw = localStorage.getItem(CONTEXT_STORAGE_KEY);
  return raw ? (JSON.parse(raw) as AuthContextStorageType) : undefined;
};

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [users, setUser] = React.useState<IUser[]>([]);
  const [session, setSession] = React.useState<ISession | null>(null);

  React.useEffect(() => {
    const context = getStorageContext();

    if (context) {
      setUser(context.users);
      setSession(context.session);
    }
  }, []);

  const createUser = (user: IUser) => {
    const newUsers = [...users, user];
    const newSession = { email: user.email, expiredAt: getSessionExpireDate() };
    setUser(newUsers);
    setSession(newSession);

    localStorage.setItem(
      CONTEXT_STORAGE_KEY,
      JSON.stringify({ users: newUsers, session: newSession })
    );
  };

  const getSessionExpireDate = () => {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    return date;
  };

  const login = (email: string, password: string): boolean => {
    const findMatch = users.find(
      (user) => user.email === email && user.password === password
    );
    if (findMatch) {
      const newSession = {
        email: findMatch.email,
        expiredAt: getSessionExpireDate(),
      };

      setSession(newSession);

      localStorage.setItem(
        CONTEXT_STORAGE_KEY,
        JSON.stringify({ users, session: newSession })
      );

      return true;
    }

    return false;
  };

  const logout = () => {
    setSession(null);
    localStorage.setItem(
      CONTEXT_STORAGE_KEY,
      JSON.stringify({ users, session: null })
    );
  };

  return (
    <AuthContext.Provider value={{ users, session, createUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
