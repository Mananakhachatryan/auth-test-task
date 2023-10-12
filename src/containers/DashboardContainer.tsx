import React from "react";
import { Container } from "@mui/material";
import DashboardContent from "../components/DashboardContent";
import { AuthContext } from "../context/authContext";
import { AuthContextType } from "../context/auth";

const DashboardContainer: React.FC = () => {
  const { logout } = React.useContext(AuthContext) as AuthContextType;
  return (
    <Container maxWidth="sm">
      <DashboardContent logout={logout} />
    </Container>
  );
};

export default DashboardContainer;
