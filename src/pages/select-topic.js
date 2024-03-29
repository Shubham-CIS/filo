import React from 'react';
import './../select-topic.css';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';

import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Rating from '@mui/material/Rating';
// import Chip from '@mui/material/Chip';
// import WatchLaterIcon from '@mui/icons-material/WatchLater';

// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';



function SelectTopic() {

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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} className='welcome-user'>
              <Box>
                <h1>Hi, <strong>Mellissa</strong> </h1>
              </Box>
              <Box>
                <p className='m-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </Box>
            </Grid>
          </Grid>

          <Grid className='whitebox-wrap cis-tutor-cards' container spacing={3}>
            <Grid item xs={12} sm={12} md={12}>
                <h3 className='cis-title-1 mb-0'>Ask your question</h3>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
                <Box fullWidth>
                  <TextField className='cis-ask-question-field' label="" variant="outlined" fullWidth
                    multiline
                    minRows={4}
                    value="How YASA app works?"
                  />
                </Box>
              </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <Box item  sx={{width: '100%'}}>
                  <Button variant="" component="label" className='upload-photo cis-uploded-box'>
                    <div>
                      <CloudUploadIcon color='#CCCCCC' />
                    </div>
                  </Button>
                </Box>
            </Grid>


            <Grid item xs={12} sm={12} md={12}>
              <h2 className='cis-title-2'>Select subject of the question</h2>
              <div className='cis-btn-wrap'>
                <Button variant='outlined' sx={{px:3}}>Science</Button>
                <Button variant='outlined' sx={{px:3}}>Mathematics</Button>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <div className="cis-btn-group cis-btn-alignment">
                <Button variant="outlined" size='large'>Back</Button>
                <Button variant="contained" size='large'>Next</Button>
              </div>
            </Grid>


            <Grid item xs={12}>
              {/* <Grid item xs={12} sm={12} md={12}>
                <hr className='cis-devider' />
              </Grid> */}

              
            </Grid>

          </Grid>
        </div>
      </div>

      <img src='../../images/bottom-bg.png' alt='' className='cloud-img' />
    </>
  );
}

export default SelectTopic;
