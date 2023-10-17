import { IUser, ISession, ActionMap, AuthContextStorageType } from "./auth";

export enum AuthTypes {
  RESTORE = "RESTORE",
  CREATE = "CREATE_USER",
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

export const CONTEXT_STORAGE_KEY = "auth";

const getSessionExpireDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  return date;
};

export const getStorageContext = () => {
  const raw = localStorage.getItem(CONTEXT_STORAGE_KEY);
  return raw ? (JSON.parse(raw) as AuthContextStorageType) : undefined;
};

export type AuthState = {
  users: IUser[];
  session: ISession | null;
};

type AuthPayload = {
  [AuthTypes.CREATE]: IUser;
  [AuthTypes.LOGIN]: {
    email: string;
    password: string;
  };
  [AuthTypes.LOGOUT]: {};
};

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

export const authReducer = (state: AuthState, action: AuthActions) => {
  switch (action.type) {
    case AuthTypes.CREATE: {
      const newState = {
        users: [...state.users, action.payload],
        session: {
          email: action.payload.email,
          expiredAt: getSessionExpireDate(),
        },
      };
      localStorage.setItem(CONTEXT_STORAGE_KEY, JSON.stringify(newState));

      return newState;
    }

    case AuthTypes.LOGIN: {
      const findMatch = state.users.find(
        (user) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      console.log("dddd", findMatch, state.users, action.payload);
      if (!findMatch) {
        return state;
      }

      const newState = {
        users: state.users,
        session: {
          email: action.payload.email,
          expiredAt: getSessionExpireDate(),
        },
      };

      localStorage.setItem(CONTEXT_STORAGE_KEY, JSON.stringify(newState));

      return newState;
    }

    case AuthTypes.LOGOUT: {
      const newState = {
        users: state.users,
        session: null,
      };

      localStorage.setItem(CONTEXT_STORAGE_KEY, JSON.stringify(newState));

      return newState;
    }

    default:
      return state;
  }
};
