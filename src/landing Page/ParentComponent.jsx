import {
  Container,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  FormControl,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

function ParentComponent() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} maxWidth>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              LOGO
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="xs"> 
        <FormControl sx={{}}>
            <TextField type="email" placeholder="Enter Email"/>
            <TextField type="password" placeholder="Enter Password"/>
            <Button type="Submit" variant="contained">Submit</Button>
        </FormControl>
      </Container>
      </>
  );
}

export default ParentComponent;
