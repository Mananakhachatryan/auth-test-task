import React from "react";
import { Container } from "@mui/material";
import RegisterContent from "../components/RegisterContent";
import { AuthContext } from "../context/authContext";
import { AuthContextType } from "../context/auth";

const RegisterContainer: React.FC = () => {
  const { createUser } = React.useContext(AuthContext) as AuthContextType;

  return (
    <Container maxWidth="sm">
      <RegisterContent createUser={createUser} />
    </Container>
  );
};

export default RegisterContainer;
