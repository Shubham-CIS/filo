import React from 'react';
import './../tutor.css';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';

import LogoutIcon from '@mui/icons-material/Logout';

import { Button, CardMedia } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CircleIcon from '@mui/icons-material/Circle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import VideocamIcon from '@mui/icons-material/Videocam';
import StarIcon from '@mui/icons-material/Star';

function Tutor() {

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
        <div className='welcome-box-wrap cis-tutor-page'>
          <Grid container spacing={2} className='cis-tutor-info'>
            <Grid item xs={12} sm={12} md={12} className='welcome-user'>
              <div className='cis-title-2col'>
                <h2 className='cis-title-1 mb-0'>John Parker</h2>
                <div>
                  <Button variant="outlined" size='large' sx={{ width: '160px' }}>Back</Button>
                </div>
              </div>
              <Card sx={{ display: 'flex' }} className="cis-card">
                <Box className="cis-cardMedia">
                  <CardMedia
                    component="img"
                    image="../../images/Tutor-1.png"
                    alt=""
                  />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
                  <CardContent sx={{ flex: '1 1 auto' }}>
                    <h2 className='cis-title-2'>
                        <span> <Box component="span" sx={{ color: '#EA4435' }}>Busy</Box> with YASA Pro Students</span>
                        <span> <CircleIcon sx={{color: '#EA4435',fontSize: '14px' }} /> 2 Sessions with you</span>
                    </h2>
                    <div className='cis-card-action'>
                      <div>
                        <Button variant="outlined" size='large'>Schedule a class</Button>
                        <Button variant="contained" size='large'>Connect now</Button>
                      </div>
                      <div className='cis-favourite-btn-wrap'>
                        <Button variant="outlined" size='large' sx={{ width: '160px' }}><StarIcon sx={{color: '#F3C10F'}} /> Favourite tutor</Button>
                      </div>
                    </div>
                  </CardContent>
                  
                </Box>
              </Card>
            </Grid>
          </Grid>

          <Grid className='whitebox-wrap cis-tutor-cards' container spacing={2}>
            <Grid item xs={12}>
              <div className='cis-title-2col'>
                <h2 className='cis-title-1 mb-0'>Recent Sessions</h2>
              </div>
            </Grid>

    
            <Grid item xs={12} md={8}>
              <Card sx={{ display: 'flex' }} className="cis-card">
                <Box className="cis-cardMedia">
                  <CardMedia
                    component="img"
                    image="../../images/Sessions-1.png"
                    alt=""
                  />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
                  <CardContent sx={{ flex: '1 1 auto' }}>
                    <div className='cis-Chips'>
                      <Chip icon={<WatchLaterIcon />} variant="outlined" label=" 10 mins ago" className='cis-chip' />
                      <Chip icon={<CalendarTodayIcon />} variant="outlined" label=" 23rd, Jan, 2023" className='cis-chip' />
                      <Chip label="Chemistry" />
                      <Chip label="Science" />
                    </div>

                    <Typography component="div" variant="h5">
                      An increase in the concentration of the reactants of a reaction leads to a change in.
                    </Typography>

                    <div className='cis-card-action'>
                      <span className='cis-rating-box'> 4.0 <Rating value={4} /></span>
                    </div>
                    <div className='cis-recording'>
                      <span><VideocamIcon /></span> Recording
                    </div>
                  </CardContent>

                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
            </Grid>

            <div item xs={12} className='cis-space-50'></div>

            <Grid item xs={12} md={8}>
              <Card sx={{ display: 'flex' }} className="cis-card">
                <Box className="cis-cardMedia">
                  <CardMedia
                    component="img"
                    image="../../images/Sessions-3.png"
                    alt=""
                  />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
                  <CardContent sx={{ flex: '1 1 auto' }}>
                    <div className='cis-Chips'>
                      <Chip icon={<WatchLaterIcon />} variant="outlined" label=" 10 mins ago" className='cis-chip' />
                      <Chip icon={<CalendarTodayIcon />} variant="outlined" label=" 23rd, Jan, 2023" className='cis-chip' />
                      <Chip label="Chemistry" />
                      <Chip label="Science" />
                    </div>

                    <Typography component="div" variant="h5">
                      An increase in the concentration of the reactants of a reaction leads to a change in.
                    </Typography>

                    <div className='cis-card-action'>
                      <span className='cis-rating-box'> 4.0 <Rating value={4} /></span>
                    </div>
                    <div className='cis-recording'>
                      <span><VideocamIcon /></span> Recording
                    </div>
                  </CardContent>

                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
            </Grid>

            <div item xs={12} className='cis-space-50'></div>

            <Grid item xs={12} md={8}>
              <Card sx={{ display: 'flex' }} className="cis-card">
                  <Box className="cis-cardMedia">
                    <CardMedia
                      component="img"
                      image="../../images/Sessions-2.png"
                      alt=""
                    />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
                  <CardContent sx={{ flex: '1 1 auto' }}>
                    <div className='cis-Chips'>
                      <Chip icon={<WatchLaterIcon />} variant="outlined" label=" 10 mins ago" className='cis-chip' />
                      <Chip icon={<CalendarTodayIcon />} variant="outlined" label=" 23rd, Jan, 2023" className='cis-chip' />
                      <Chip label="Chemistry" />
                      <Chip label="Science" />
                    </div>

                    <Typography component="div" variant="h5">
                      An increase in the concentration of the reactants of a reaction leads to a change in.
                    </Typography>

                    <div className='cis-card-action'>
                      <span className='cis-rating-box'> 4.0 <Rating value={4} /></span>
                    </div>
                    <div className='cis-recording'>
                      <span><VideocamIcon /></span> Recording
                    </div>
                  </CardContent>

                  </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
            </Grid>
            

          </Grid>
        </div>
      </div>

      <img src='../../images/bottom-bg.png' alt='' className='cloud-img' />
    </>
  );
}

export default Tutor;
