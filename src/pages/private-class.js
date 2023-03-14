import React from 'react';
import './../private-class.css';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';

import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';



function PrivateClass() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  // const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  // const [openModal, setOpenModal] = React.useState(false);
  

  // const handleClickOpenModal = () => {
  //   setOpenModal(true);
  // };
  // const modalhandleClose = () => {
  //   setOpenModal(false);
  // };




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

          <div className='whitebox-wrap cis-tutor-cards'>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className='cis-title-2col'>
                  <h2 className='cis-title-1 mb-0'>Private Class</h2>
                  <Button variant="outlined" size='large' sx={{ width: '160px' }}>Back</Button>
                </div>
              </Grid>
            </Grid>

            <div className="cis-private-class">
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Card sx={{ display: 'flex' }} className="cis-card">
                    <Box sx={{ display: 'flex', flexDirection: 'column',}}>
                      <CardContent sx={{ flex: '1 1 auto' }}>
                        
                        <Typography component="div" variant="h5">
                        9th Mathematics
                        </Typography>

                        <div className='cis-Chips-2'>
                          <Chip icon={<WatchLaterIcon />} variant="outlined" label="10 mins ago" />
                          <Chip icon={<CalendarTodayIcon />} variant="outlined" label="Starts on 23rd, Jan, 2023" />
                        </div>
                        <div>
                          <Button variant='outlined' size='large' sx={{px:4}}>Detail</Button>
                        </div>

                      </CardContent>

                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className="cis-teacher-card">
                      <div className='cis-teacher-info'>
                        <img src='../../images/teacher-1.png' className='cis-teacher-img' alt='' />
                        <div className='cis-content'>
                            <h5>Jennifer Wing</h5>
                            <Rating name="read-only" value={4} readOnly />
                            <Button variant='outlined' sx={{px:2}}>Message</Button>
                        </div>
                      </div>

                    </Box>
                </Grid>
              </Grid>
            </div>
            
            <div className="cis-private-class">
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Card sx={{ display: 'flex' }} className="cis-card">
                    <Box sx={{ display: 'flex', flexDirection: 'column',}}>
                      <CardContent sx={{ flex: '1 1 auto' }}>
                        
                        <Typography component="div" variant="h5">
                        9th Mathematics
                        </Typography>

                        <div className='cis-Chips-2'>
                          <Chip icon={<WatchLaterIcon />} variant="outlined" label="10 mins ago" />
                          <Chip icon={<CalendarTodayIcon />} variant="outlined" label="Starts on 23rd, Jan, 2023" />
                        </div>
                        <div>
                          <Button variant='outlined' size='large' sx={{px:4}}>Detail</Button>
                        </div>

                      </CardContent>

                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className="cis-teacher-card">
                      <div className='cis-teacher-info'>
                        <img src='../../images/teacher-2.png' className='cis-teacher-img' alt='' />
                        <div className='cis-content'>
                            <h5>John Parker</h5>
                            <Rating name="read-only" value={4} readOnly />
                            <Button variant='outlined' sx={{px:2}}>Message</Button>
                        </div>
                      </div>
                    </Box>
                </Grid>
              </Grid>
            </div>

            <div className="cis-private-class">
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Card sx={{ display: 'flex' }} className="cis-card">
                    <Box sx={{ display: 'flex', flexDirection: 'column',}}>
                      <CardContent sx={{ flex: '1 1 auto' }}>
                        
                        <Typography component="div" variant="h5">
                        9th Mathematics
                        </Typography>

                        <div className='cis-Chips-2'>
                          <Chip icon={<WatchLaterIcon />} variant="outlined" label="10 mins ago" />
                          <Chip icon={<CalendarTodayIcon />} variant="outlined" label="Starts on 23rd, Jan, 2023" />
                        </div>
                        <div>
                          <Button variant='outlined' size='large' sx={{px:4}}>Detail</Button>
                        </div>

                      </CardContent>

                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box className="cis-teacher-card">
                      <div className='cis-teacher-info'>
                        <img src='../../images/teacher-3.png' className='cis-teacher-img' alt='' />
                        <div className='cis-content'>
                            <h5>Peter Geller</h5>
                            <Rating name="read-only" value={4} readOnly />
                            <Button variant='outlined' sx={{px:2}}>Message</Button>
                        </div>
                      </div>

                    </Box>
                </Grid>
              </Grid>
            </div>


          </div>

         




        </div>
      </div>

      <img src='../../images/bottom-bg.png' alt='' className='cloud-img' />
    </>
  );
}

export default PrivateClass;
