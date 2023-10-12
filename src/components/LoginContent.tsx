// src/Login.tsx

import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";

type LoginProps = {
  login: (email: string, password: string) => boolean;
};

const Login: React.FC<LoginProps> = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const result = login(email, password);
    if (result) {
      navigate("/dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <Box mt={5}>
      <Typography variant="h4" align="center">
        Login
      </Typography>
      <form>
        <TextField
          label="Email"
          fullWidth
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => handleLogin()}
        >
          Login
        </Button>
        <Typography
          variant="body1"
          align="center"
          style={{ marginTop: "20px" }}
        >
          <Link
            href="/register"
            color="textPrimary"
            style={{ textDecoration: "none" }}
          >
            or Register
          </Link>
        </Typography>
      </form>
    </Box>
  );
};

export default Login;
