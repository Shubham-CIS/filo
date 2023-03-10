import React from 'react';
import './../QuickCallDashboard.css';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import ListItem from '@mui/material/ListItem';


// import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';

import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardIcon from '@mui/icons-material/Keyboard';
// import { Box } from '@mui/system';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import PhotoCamera from '@mui/icons-material/PhotoCamera';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function QuickCallDashboard() {


  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <>
      <header className='mainHeader' component={Paper} elevation={6}>
        <div className='container'>
          <div className='row'>
            <div className='col-left'>
              <div>
                <img src='../../images/logo.png' alt='' className='' />
              </div>
            </div>
            <div className='col-right'>
              <div className=''>
                <div className='loginuser-menu' onClick={handleClick}>
                  <img src='../../images/user-img.png' alt='' className='' />
                </div>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  className="loginuser-menu-wrap"
                >

                  <MenuItem disablePadding>
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                  <MenuItem disablePadding>
                    <ListItemIcon>
                      <img src='../../images/icon/4.svg' alt='' />
                    </ListItemIcon>
                    Get YASAPRO
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </header>


      <img src='../../images/cloud.png' alt='' className='cloud-img' />

      <div className='container'>
        <div className='welcome-box-wrap'>
          <div className='welcome-user'>
            <Box>
              <h1>Hi, <strong>Mellissa</strong> </h1>
            </Box>
            <Box>
              <Button variant="outlined" size='large' sx={{ pt: 1, pb: 1 }} className="txt-btn">Take photo of the question</Button>

              <IconButton aria-label="delete" size='large' className='icon-btn'>
                <KeyboardIcon />
              </IconButton>
            </Box>
          </div>

          <Grid className='whitebox-wrap' container spacing={2}>
            <Grid item xs={12} sm={12} md={8} >
              <Box>
                <label>Ask your question</label>
                <TextField id="outlined-basic" label="" variant="outlined" fullWidth
                  multiline
                  minRows={5}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4} >
              <Button variant="" component="label" className='upload-photo'>
                <div>
                  <CloudUploadIcon color='#CCCCCC' />
                  <span>Upload question image</span>
                  <p>Drag & Drop your <br />image here</p>
                  <input hidden accept="image/*" multiple type="file" />
                </div>
              </Button>
            </Grid>

          </Grid>
        </div>
      </div>

      <img src='../../images/bottom-bg.png' alt='' className='cloud-img' />
    </>
  );
}

export default QuickCallDashboard;
