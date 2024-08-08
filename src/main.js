import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  Typography,
  Box,
  CardActionArea,
  CardContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Checkbox,
} from "@mui/material";
import { Container } from "@mui/system";
import Paper from "@mui/material/Paper";

function Main() {
  const [getData, setGetData] = useState({});
  const [getApiData, setGetApiData] = useState([]);
  const [filterApiData, setFilterApiData] = useState([]);
  const [click, setclick] = useState(false);
  const [filterClick, setFilterClick] = useState(false);
  const [formClick, setFormClick] = useState(false);
  const [gender, setGender] = useState("");
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [idError, setIdError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setlastNameError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [deleteFormClick, setDeleteFormClick] = useState(false);
  const [deleteFormError, setDeleteFormError] = useState("");
  const [updateFormClick, setUpdateFormClick] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [checked, setChecked] = useState([]);
  useEffect(() => {
    getUserData();
    getAllUserData();
    getAgregatedData();
  }, []);

  useEffect(() => {
    if (deleteFormError !== "") {
      alert(deleteFormError);
      setDeleteFormError("");
    }
  }, [deleteFormError]);

  function getUserData() {
    axios
      .get("http://localhost:9001/readApiData")
      .then((res) => {
        console.log("hiii", res.data);
        setGetData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching message:", error);
      })
      .finally(() => {});
  }

  //--- getting Aggregated Data

  function getAgregatedData() {
    axios
      .get("http://localhost:9001/filterApiData")
      .then((res) => {
        console.log("filter Api Data", res.data);
        setFilterApiData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching message:", error);
      })
      .finally(() => {
        // console.log("Always Executed");
      });
  }

  //----post method

  function InsertUserData() {
    axios
      .post("http://localhost:9001/InsertApiData", {
        id: Number(userId),
        first_name: firstName,
        last_name: lastName,
        email: email,
        gender: gender,
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
      .finally(() => {
        setGender("");
        setUserId("");
        setEmail("");
        setFirstName("");
        setLastName("");
      });
  }

  // getting whole Data from database...

  function getAllUserData() {
    axios
      .get("http://localhost:9001/GetUserDataApi")
      .then((res) => {
        console.log("All user Data", res.data);
        setGetApiData(res.data);
      })
      .catch((error) => {
        console.error("Error Getting All User Data message:", error);
      })
      .finally(() => {
        // console.log("Always Executed");
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === "") {
      setIdError(true);
    } else if (email === "") {
      setEmailError(true);
    } else if (firstName === "") {
      setFirstNameError(true);
    } else if (lastName === "") {
      setlastNameError(true);
    } else if (gender === "") {
      setGenderError(true);
    } else if (userId && email && firstName && lastName && gender) {
      alert("Form submitted successfully!");
      InsertUserData();
    }
  };

  function handleChange(value, data) {
    if (value === "userId") {
      setUserId(data);
      setIdError(false);
    } else if (value === "email") {
      setEmail(data);
      setEmailError(false);
    } else if (value === "firstName") {
      setFirstName(data);
      setFirstNameError(false);
    } else if (value === "lastName") {
      setLastName(data);
      setlastNameError(false);
    } else if (value === "gender") {
      setGender(data);
      setGenderError(false);
    }
  }

  function handleDelete(e) {
    e.preventDefault();
    if (userId === "") {
      setIdError(true);
    } else if (email === "") {
      setEmailError(true);
    } else if (userId && email) {
      const userdata = getApiData.find(
        (user) => Number(userId) === user.id && email === user.email
      );
      if (userdata === undefined) {
        alert("User not found");
      } else {
        alert("user Deleted Sucessful");
        deleteApi(userdata);
      }
    }
  }

  function deleteApi(data) {
    axios
      .post("http://localhost:9001/DeleteApiData", data)
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
      .finally(() => {
        setUserId("");
        setEmail("");
        getAllUserData();
      });
  }
  function updateApi() {
    axios
      .put("http://localhost:9001/UpdateApiData", {
        id: Number(userId),
        first_name: firstName,
        last_name: lastName,
        email: email,
        gender: gender,
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
      .finally(() => {
        setGender("");
        setUserId("");
        setEmail("");
        setFirstName("");
        setLastName("");
        getAllUserData();
      });
  }

  function handleUpdate(e) {
    e.preventDefault();
    if (userId === "") {
      setIdError(true);
    } else if (email === "") {
      setEmailError(true);
    } else if (firstName === "") {
      setFirstNameError(true);
    } else if (lastName === "") {
      setlastNameError(true);
    } else if (gender === "") {
      setGenderError(true);
    } else if (userId && email && firstName && lastName && gender) {
      const userdata = getApiData.find((user) => Number(userId) === user.id);
      if (userdata === undefined) {
        alert("User not found");
      } else {
        alert("user Updated Sucessful");
        updateApi();
      }
    }
  }

  function handleCheck(value, data) {
    if (value === "checkAll") {
      const CheckedData = data ? getApiData.map((item)=>item.id):[]
      setChecked(CheckedData);
    }
    else {
      const Selected = data ? [...checked, value] :
      checked.filter((item)=>item !== value);
      setChecked(Selected);
  }
  }

  return (
    <Container>
      <Box>
        <Button
          variant="contained"
          onClick={() => {
            setclick(true);
          }}
          sx={{ m: 5 }}
        >
          GEt User data
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setFilterClick(true);
          }}
          sx={{ m: 5 }}
        >
          GEt Aggregated User data
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setFormClick(true);
          }}
          sx={{ m: 5 }}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setDeleteFormClick(true);
          }}
          sx={{ m: 5 }}
        >
          Delete User
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setUpdateFormClick(true);
          }}
          sx={{ m: 5 }}
        >
          Update User
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setShowTable(true);
          }}
          sx={{ m: 5 }}
        >
          Show Table
        </Button>
      </Box>
      {updateFormClick && (
        <FormControl>
          <TextField
            type="number"
            placeholder="Enter User Id"
            onChange={(a) => handleChange("userId", a.target.value)}
            error={idError}
            value={userId}
            sx={{ my: 2, mx: 3 }}
          />
          <TextField
            variant="outlined"
            type="email"
            placeholder="Enter email"
            onChange={(a) => handleChange("email", a.target.value)}
            error={emailError}
            value={email}
            sx={{ my: 2, mx: 3 }}
          />
          <TextField
            type="text"
            placeholder="Enter First Name"
            onChange={(a) => handleChange("firstName", a.target.value)}
            error={firstNameError}
            value={firstName}
            sx={{ my: 2, mx: 3 }}
          />
          <TextField
            type="text"
            placeholder="Enter last Name"
            onChange={(a) => handleChange("lastName", a.target.value)}
            error={lastNameError}
            value={lastName}
            sx={{ my: 2, mx: 3 }}
          />
          <FormControl error={genderError}>
            <InputLabel sx={{ my: 2, mx: 3 }}>Gender</InputLabel>
            <Select
              value={gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              sx={{ px: 10, my: 2, mx: 3 }}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"bigender"}>Bigender</MenuItem>
            </Select>
            {genderError && <FormHelperText>Gender is required</FormHelperText>}
          </FormControl>
          <Button
            type="submit"
            onClick={handleUpdate}
            variant="contained"
            sx={{ m: 5 }}
          >
            Update
          </Button>
        </FormControl>
      )}

      {deleteFormClick && (
        <FormControl>
          <TextField
            type="number"
            placeholder="Enter User Id"
            onChange={(a) => handleChange("userId", a.target.value)}
            error={idError}
            value={userId}
            sx={{ my: 2, mx: 3 }}
          />
          <TextField
            variant="outlined"
            type="email"
            placeholder="Enter email"
            onChange={(a) => handleChange("email", a.target.value)}
            error={emailError}
            value={email}
            sx={{ my: 2, mx: 3 }}
          />
          <Button
            type="submit"
            onClick={handleDelete}
            variant="contained"
            sx={{ m: 5 }}
          >
            Delete User
          </Button>
        </FormControl>
      )}

      {formClick && (
        <FormControl>
          <TextField
            type="number"
            placeholder="Enter User Id"
            onChange={(a) => handleChange("userId", a.target.value)}
            error={idError}
            value={userId}
            sx={{ my: 2, mx: 3 }}
          />
          <TextField
            variant="outlined"
            type="email"
            placeholder="Enter email"
            onChange={(a) => handleChange("email", a.target.value)}
            error={emailError}
            value={email}
            sx={{ my: 2, mx: 3 }}
          />
          <TextField
            type="text"
            placeholder="Enter First Name"
            onChange={(a) => handleChange("firstName", a.target.value)}
            error={firstNameError}
            value={firstName}
            sx={{ my: 2, mx: 3 }}
          />
          <TextField
            type="text"
            placeholder="Enter last Name"
            onChange={(a) => handleChange("lastName", a.target.value)}
            error={lastNameError}
            value={lastName}
            sx={{ my: 2, mx: 3 }}
          />
          <FormControl error={genderError}>
            <InputLabel sx={{ my: 2, mx: 3 }}>Gender</InputLabel>
            <Select
              value={gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              sx={{ px: 10, my: 2, mx: 3 }}
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"bigender"}>Bigender</MenuItem>
            </Select>
            {genderError && <FormHelperText>Gender is required</FormHelperText>}
          </FormControl>
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="contained"
            sx={{ m: 5 }}
          >
            Submit
          </Button>
        </FormControl>
      )}

      {click && (
        <Card
          variant="outlined"
          sx={{
            maxWidth: 345,
            p: 5,
            m: 10,
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography>Product Id : {getData.id}</Typography>
              <Typography>Product Name: {getData.name}</Typography>
              <Typography>product Price: {getData.price} </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )}

      {filterClick && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Typography>Filtered Data using Aggrigation</Typography>
          {filterApiData.map((result) => (
            <Card
              sx={{
                maxWidth: 345,
                background: "#f1f1f1",
                p: 5,
                m: 5,
                "&:hover": {
                  background: "#fea115",
                  color: "#fff",
                  marginTop: "30px",
                },
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography variant="h5">
                    <b>User Name:</b> {result.first_name}
                  </Typography>
                  <Typography variant="body2">
                    <b>User Email:</b> {result.email}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      )}

      {showTable && (
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <Checkbox
                  checked={checked.length === getApiData.length} 
                  color="primary"
                  onChange={(e) => handleCheck("checkAll", e.target.checked)}
                />
                <TableCell>Id</TableCell>
                <TableCell align="left">First Name</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="center">Gender</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getApiData.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <Checkbox color="primary" checked={checked.includes(row.id)} onChange={(e)=>{handleCheck(row.id,e.target.checked)}} />
                  <TableCell>{row.id}</TableCell>
                  <TableCell align="left">{row.first_name}</TableCell>
                  <TableCell align="left">{row.last_name}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="center">{row.gender}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}

export default Main;
