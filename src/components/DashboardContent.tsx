import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box } from "@mui/material";

type DashboardProps = {
  logout: () => void;
};

const Dashboard: React.FC<DashboardProps> = ({ logout }) => {
  const navigate = useNavigate();
  const logoutUser = () => {
    navigate("/");
    logout();
  };

  return (
    <Box mt={5} style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ lineHeight: "40px" }}>Hi Marcus</div>
      <Button
        variant="contained"
        color="primary"
        style={{ padding: "8px 16px", fontSize: "14px" }}
        onClick={() => logoutUser()}
      >
        Log out
      </Button>
    </Box>
  );
};

export default Dashboard;
