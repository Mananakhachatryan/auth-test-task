// src/Login.tsx

import React, { useEffect, useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { ISession } from "../context/auth";

type LoginProps = {
  login: (email: string, password: string) => void;
  session: ISession | null;
};

const Login: React.FC<LoginProps> = ({ login, session }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (session) {
      navigate("/dashboard");
    }
  }, [session, navigate]);

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
          onClick={() => login(email, password)}
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
