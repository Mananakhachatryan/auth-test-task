import React from "react";
import { Container } from "@mui/material";
import Login from "../components/LoginContent";
import { AuthContext } from "../context/authContext";
import { AuthTypes } from "../context/authReducer";

const LoginContainer: React.FC = () => {
  const { dispatch, state } = React.useContext(AuthContext);

  const login = (email: string, password: string) => {
    dispatch({
      type: AuthTypes.LOGIN,
      payload: { email, password },
    });
  };

  return (
    <Container maxWidth="sm">
      <Login login={login} session={state.auth.session} />
    </Container>
  );
};

export default LoginContainer;
