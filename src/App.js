import React from 'react';
import './App.css';
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from "@material-ui/core/Toolbar";
import ImageAvatars from "./components/midaiprofile";
import Personalform from "./components/personalInformation";
function App() {
  return (
   
    <React.Fragment>
      <AppBar position="static" >
        <Toolbar variant="dense" >
          <IconButton edge="start" color="inherit" aria-label="menu">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            ข้อมูลผู้ใช้
     </Typography>
        </Toolbar>
        
      </AppBar>
    <ImageAvatars></ImageAvatars>

    <Personalform></Personalform>
    </React.Fragment>
   
  );
}
export default App;
