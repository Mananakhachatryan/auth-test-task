import React from "react";
import { Container } from "@mui/material";
import DashboardContent from "../components/DashboardContent";
import { AuthContext } from "../context/authContext";
import { AuthTypes } from "../context/authReducer";

const DashboardContainer: React.FC = () => {
  const { dispatch } = React.useContext(AuthContext);

  const logout = () => {
    dispatch({
      type: AuthTypes.LOGOUT,
      payload: {},
    });
  };

  return (
    <Container maxWidth="sm">
      <DashboardContent logout={logout} />
    </Container>
  );
};

export default DashboardContainer;
