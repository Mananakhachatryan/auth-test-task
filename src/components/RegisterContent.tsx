// src/Login.tsx

import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { IUser } from "../context/auth";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";

type RegisterProps = {
  createUser: (user: IUser) => void;
};

const Register: React.FC<RegisterProps> = ({ createUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const nameRegex = /^[A-Za-z\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const isValid = (input: string, regex: RegExp) => regex.test(input);

  const register = () => {
    if (!isValid(name, nameRegex)) {
      alert("Invalid name. Please enter a valid name.");
      return;
    }

    if (!isValid(email, emailRegex)) {
      alert("Invalid email. Please enter a valid email address.");
      return;
    }

    if (!isValid(password, passwordRegex)) {
      alert(
        "Invalid password. Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, and one digit."
      );
      return;
    }

    createUser({ name, email, password });
    navigate("/dashboard");
  };

  return (
    <Box mt={5}>
      <Typography variant="h4" align="center">
        Register
      </Typography>
      <form>
        <TextField
          label="Name"
          fullWidth
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
          onClick={() => register()}
        >
          Register
        </Button>
      </form>
      <Typography variant="body1" align="center" style={{ marginTop: "20px" }}>
        <Link href="/" color="textPrimary" style={{ textDecoration: "none" }}>
          or Login
        </Link>
      </Typography>
    </Box>
  );
};

export default Register;
