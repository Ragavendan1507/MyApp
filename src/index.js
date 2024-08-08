import React from 'react';
import ReactDOM from 'react-dom/client';
import  "./index.css";
// import Main from './main';
import reportWebVitals from './reportWebVitals';
// import Form from './Form';
// import Sample1 from './Sample1';
import { ThemeProvider, createTheme} from '@mui/material';
// import Test from './test';
// import ParentComponent from './landing Page/ParentComponent';


const theme = createTheme({
  palette:{
    primary:{
      main :"#013e87",
    },
    secondary:{ 
      main: "#2e74c9",
    },
  },
  typography:{
    h1:{
      fontSize:"3rem",
      fontWeight:600,
    },
    h2:{
      fontSize:"1.75rem",
      fontWeight:600,
    },
    h3:{
      fontSize:"1.5rem",
      fontWeight:600,
    },
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Main />  */}
    {/* <Test/> */}
    {/* <Form/> */}
    <ThemeProvider theme={theme}>
    {/* <Sample1/> */}
    {/* <ParentComponent/>  */}
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
