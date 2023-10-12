import React from "react";
import { Container } from "@mui/material";
import Login from "../components/LoginContent";
import { AuthContext } from "../context/authContext";
import { AuthContextType } from "../context/auth";

const LoginContainer: React.FC = () => {
  const { login } = React.useContext(AuthContext) as AuthContextType;
  return (
    <Container maxWidth="sm">
      <Login login={login} />
    </Container>
  );
};

export default LoginContainer;
