import * as React from "react";
import {
  AuthState,
  authReducer,
  AuthActions,
  getStorageContext,
} from "./authReducer";

type InitialStateType = {
  auth: AuthState;
};

const mainReducer = ({ auth }: InitialStateType, action: AuthActions) => ({
  auth: authReducer(auth, action),
});

const initialState = () => {
  return {
    auth: getStorageContext() || {
      users: [],
      session: null,
    },
  } as InitialStateType;
};

export const AuthContext = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<AuthActions>;
}>({
  state: initialState(),
  dispatch: () => null,
});

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = React.useReducer(mainReducer, initialState());

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
