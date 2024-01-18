import React, { useState } from "react";
import { TextField, Button, Typography, Container, Grid, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission
    alert("user login");
    console.log(username);
    console.log(password);

    if (username === "yourUsername" && password === "yourPassword") {
      // If authenticated, set isLoggedIn to true and navigate to the dashboard
      onLogin(true);
      navigate("/dashboard");
    } else {
      // Handle authentication failure (e.g., show an error message)
      console.log("Authentication failed");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleLogin} style={{backgroundColor:"white", color:"black"}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography component="h1" variant="h5" align="center">
              Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              color=""
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit" // Change type to "submit"
              fullWidth
              variant="contained"
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              Don't have an account?{" "}
              <Link href="#" variant="contained">
                Sign Up
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Login;
