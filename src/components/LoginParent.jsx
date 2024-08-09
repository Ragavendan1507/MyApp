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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from "react";
// import {img} from "./images/loginImage.jpg"


function LoginParent() {
    const [getApiData,setApiData] = useState([]);
    const [userId,setUserId] = useState("");
    const [password,setPassword] = useState("");

    function handleChange (value,data){
      if(value === "userId"){
        setUserId(Number(data));
      }
      else if(value === "password"){
        setPassword(data);
      }
    }
   
  function  handleSubmit(e){
    e.preventDefault();
    if(userId === ""){
        alert("user Id Required")
    }
    else if( password === ""){
        alert ("password field is Empty")
    }
  }

  return (
    <Paper elevation={5} sx={{m:10}}>
      <Grid container component="main">
        <Grid
          item
          xs={false}loginImage
          sm={4}
          md={7}
            sx={{
              backgroundImage: 'url("https://cdn.pixabay.com/photo/2021/12/28/01/07/website-6898411_1280.png")',
              backgroundColor: grey[50],
              backgroundSize: "cover",
              backgroundPosition: "left",
            }}
            component={Paper}
            square
            />
        <Grid item xs={12} sm={8} md={5} component={Paper} square>
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
                id="userId"
                label="User Id"
                name="userId"
                onChange={(e)=>handleChange("userId",e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
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
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default LoginParent;
