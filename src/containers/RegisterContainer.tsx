import React from "react";
import { Container } from "@mui/material";
import RegisterContent from "../components/RegisterContent";
import { AuthContext } from "../context/authContext";
import { IUser } from "../context/auth";
import { AuthTypes } from "../context/authReducer";

const RegisterContainer: React.FC = () => {
  const { dispatch } = React.useContext(AuthContext);

  const createUser = (user: IUser) => {
    dispatch({
      type: AuthTypes.CREATE,
      payload: user,
    });
  };

  return (
    <Container maxWidth="sm">
      <RegisterContent createUser={createUser} />
    </Container>
  );
};

export default RegisterContainer;
