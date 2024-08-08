import React ,  {useState,useEffect} from "react";
import axios from "axios";
import { Box } from "@mui/system";
import { Container, Paper, Typography } from "@mui/material";

function Sample1() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, []);
  
    return (
     <Container>
       <Typography variant="h1" sx={{my:4, textAlign:"center", color :"primary.main" }}>HTTP Requests</Typography>
       <Box 
        sx={{
          pt:4,
          display:"flex",
          flexDirection:"row",
          justifyContent: "space-between",
          gap : 4,
        }}
       >
       </Box>
     </Container>
    );
  }
  
  export default Sample1;