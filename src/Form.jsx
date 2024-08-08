import React, { useState} from "react";
import { Button, TextField} from "@mui/material";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === '' && password === ''){
        setEmailError(true);
        setPasswordError(true);
        }
    else {
      alert("login Success");
    }
  };

  const handleChange = (value, data) => {
    if (value === "email") {
      setEmail(data);
      setEmailError(false)
    } else if (value === "password") {
      setPassword(data);
      setPasswordError(false)
    }
  };

  return (
    <form  onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <TextField
        onChange={(a)=>handleChange("email",a.target.value)}
        label="email"
        variant="outlined"
        type="email"
        value={email}
        error={emailError}
      />
      <TextField
        onChange={(a)=>handleChange("password",a.target.value)}
        label="password"
        variant="outlined"
        minRows={6}
        type="password"
        value={password}
        error={passwordError}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
}

export default Form;
