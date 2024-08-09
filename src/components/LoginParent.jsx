import {
  Grid,
  Paper,
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useState } from "react";
// import {img} from "./images/loginImage.jpg"

function LoginParent() {
  const [getApiData, setApiData] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginClick, setLoginClick] = useState(true);
  const [forgotPasswordClick, setForgotPasswordClick] = useState(false);
  const [conformUserClick,setConformUser] = useState(false);

  function handleChange(value, data) {
    if (value === "userName") {
      setUserName(data);
    } else if (value === "password") {
      setPassword(data);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (userName === "") {
      alert("user Id Required");
    } else if (password === "") {
      alert("password field is Empty");
    }
  }

  function handleClick(key){
    if(key === "SignIn"){
        setLoginClick(true);
        setForgotPasswordClick(false);
        setConformUser(false);
    }
    if(key === "ForgotPassword"){
        setLoginClick(false);
        setForgotPasswordClick(true);
        setConformUser(false);
    }
  }

  return (
    <Paper elevation={6} sx={{ m: 10 }}>
      <Grid container component="main">
        <Grid
          item
          xs={false}
          loginImage
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url("https://cdn.pixabay.com/photo/2021/12/28/01/07/website-6898411_1280.png")',
            backgroundColor: grey[50],
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
          component={Paper}
          square
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} square>
          {loginClick && (
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  value={userName}
                  onChange={(e) => handleChange("userName", e.target.value)}
                  autoFocus
                />
                <TextField
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => handleChange("password", e.target.value)}
                  value={password}
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link onClick={()=>handleClick("ForgotPassword")} variant="body2" component={Button}>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link onClick={()=>handleClick("SignUp")} variant="body2" component={Button}>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          )}

          {forgotPasswordClick && (
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Reset Password
              </Typography>
              <Box
                component="form"
                noValidate
                //    onSubmit={handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  fullWidth
                  name="New Password"
                  label="New Password"
                  type="password"
                  id="New Password"
                  onChange={(e) => handleChange("password", e.target.value)}
                  value={password}
                  autoComplete="current-password"
                />
                <TextField
                  margin="normal"
                  fullWidth 
                  name="Conform Password"
                  label="Conform Password"
                  type="password"
                  id="Conform password"
                  onChange={(e) => handleChange("password", e.target.value)}
                  value={password}
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Continue
                </Button>
                <Grid container sx={{mt:5}}>
                  <Grid item xs>
                    <Link onClick={()=>handleClick("SignIn")} variant="body2"  component={Button}>
                      Existing User?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link onClick={()=>handleClick("SignUp")} variant="body2"  component={Button}>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default LoginParent;
