import React from 'react';
import './../QuickCallDashboard.css';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';

import LogoutIcon from '@mui/icons-material/Logout';

import { Button, CardMedia } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function QuickCallDashboard() {

  const [value, setValue] = React.useState(0);

  const handleChange2 = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

          <Grid className='whitebox-wrap cis-tutor-cards' container spacing={2}>
            <Grid item xs={12} sm={12} md={12} className="cis-tabs">
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'devider' }}>
                  <Tabs value={value} onChange={handleChange2} aria-label="basic tabs example">
                    <Tab label="Ask your question" {...a11yProps(0)} />
                    <Tab label="Take photo of the question" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <h3 className='cis-title-1'>Ask your question</h3>
                  <Box fullWidth>
                    <TextField className='cis-ask-question-field' label="" variant="outlined" fullWidth
                      multiline
                      minRows={8}
                    />
                    <p className='cis-uplod-info text-align-none'>Minimum 10  characters required</p>
                  </Box>
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <h3 className='cis-title-1'>Upload question</h3>
                    <Box item  sx={{maxWidth: '400px', width: '40%'}}>
                      <Button variant="" component="label" className='upload-photo'>
                        <div>
                          <CloudUploadIcon color='#CCCCCC' />
                          <span>Upload question image</span>
                          <p>Drag & Drop your <br />image here</p>
                          <input hidden accept="image/*" multiple type="file" />
                        </div>
                      </Button>
                      <p className='cis-uplod-info'>Supports: JPG, JPEG & PNG </p>
                    </Box>
                </TabPanel>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <div className="cis-btn-group">
                <Button variant="contained" size='large'>Next</Button>
                <Button variant="outlined" size='large'>Back</Button>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <hr className='cis-devider' />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
              <h2 className='cis-title-1'>Favorite Tutors</h2>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Card className="card">
                <img src="../../images/Tutors-1.png" className='cis-cadImg' alt='' />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="h2">
                    Jennifer Wing
                  </Typography>
                  <Typography>
                    <Rating name="read-only" value={2} readOnly />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Card className="card">
                <img src="../../images/Tutors-2.png" className='cis-cadImg' alt='' />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="h2">
                    Jennifer Wing
                  </Typography>
                  <Typography>
                    <Rating name="read-only" value={2} readOnly />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Card className="card">
                <img src="../../images/Tutors-3.png" className='cis-cadImg' alt='' />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="h2">
                    Jennifer Wing
                  </Typography>
                  <Typography>
                    <Rating name="read-only" value={3} readOnly />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Card className="card">
                <img src="../../images/Tutors-4.png" className='cis-cadImg' alt='' />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="h2">
                    Jennifer Wing
                  </Typography>
                  <Typography>
                    <Rating name="read-only" value={3} readOnly />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Card className="card">
                <img src="../../images/Tutors-5.png" className='cis-cadImg' alt='' />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="h2">
                    Jennifer Wing
                  </Typography>
                  <Typography>
                    <Rating name="read-only" value={5} readOnly />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={6} sm={4} md={3} lg={2}>
              <Card className="card">
                <img src="../../images/Tutors-6.png" className='cis-cadImg' alt='' />
                <CardContent className="cardContent">
                  <Typography gutterBottom variant="h5" component="h2">
                    Jennifer Wing
                  </Typography>
                  <Typography>
                    <Rating name="read-only" value={2} readOnly />
                  </Typography>
                </CardContent>
              </Card>
            </Grid>



            <Grid item xs={12}>
              <Grid item xs={12} sm={12} md={12}>
                <hr className='cis-devider' />
              </Grid>

              {/* Start Recent Sessions */}
            </Grid>
            <Grid item xs={12}>
              <div className='cis-title-2col'>
                <h2 className='cis-title-1 mb-0'>Recent Sessions</h2>
                <Button variant="contained" size='large' sx={{ width: '160px' }}>View all</Button>
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
                  <div className='cis-sessions-short-info'>Upto 12 mins</div>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
                  <CardContent sx={{ flex: '1 1 auto' }}>
                    <div className='cis-Chips'>
                      <Chip icon={<WatchLaterIcon />} variant="outlined" label=" 10 mins ago" className='cis-chip' />
                      <Chip label="Chemistry" />
                      <Chip label="Science" />
                    </div>

                    <Typography component="div" variant="h5">
                      An increase in the concentration of the reactants of a reaction leads to a change in.
                    </Typography>

                    <div className='cis-card-action'>
                      <Button variant="contained" size='small'>Reconnect with tutor</Button>
                      <span className='cis-rating-box'> 4.0 <Rating value={4} /></span>
                    </div>

                  </CardContent>

                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="cis-teacher-card">
                  <div className='cis-taught-by'>Taught by</div>
                  <div className='cis-teacher-info'>
                    <img src='../../images/teacher-1.png' className='cis-teacher-img' alt='' />
                    <div className='cis-content'>
                        <h5>Jennifer Wing</h5>
                        <Button variant='outlined'>Connect now</Button>
                    </div>
                  </div>

                </Box>
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
                    <div className='cis-sessions-short-info'>Upto 12 mins</div>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
                    <CardContent sx={{ flex: '1 1 auto' }}>
                      <div className='cis-Chips'>
                        <Chip icon={<WatchLaterIcon />} variant="outlined" label=" 10 mins ago" className='cis-chip' />
                        <Chip label="Chemistry" />
                        <Chip label="Science" />
                      </div>

                      <Typography component="div" variant="h5">
                        An increase in the concentration of the reactants of a reaction leads to a change in.
                      </Typography>

                      <div className='cis-card-action'>
                        <Button variant="contained" size='small'>Reconnect with tutor</Button>
                        <span className='cis-rating-box'> 4.0 <Rating value={4} /></span>
                      </div>

                    </CardContent>

                  </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="cis-teacher-card">
                  <div className='cis-taught-by'>Taught by</div>
                  <div className='cis-teacher-info'>
                    <img src='../../images/teacher-2.png' className='cis-teacher-img' alt=''/>
                    <div className='cis-content'>
                        <h5>Michael Denr</h5>
                        <Button variant='outlined'>Connect now</Button>
                    </div>
                  </div>

                </Box>
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
                  <div className='cis-sessions-short-info'>Upto 12 mins</div>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
                  <CardContent sx={{ flex: '1 1 auto' }}>
                    <div className='cis-Chips'>
                      <Chip icon={<WatchLaterIcon />} variant="outlined" label=" 10 mins ago" className='cis-chip' />
                      <Chip label="Chemistry" />
                      <Chip label="Science" />
                    </div>

                    <Typography component="div" variant="h5">
                      An increase in the concentration of the reactants of a reaction leads to a change in.
                    </Typography>

                    <div className='cis-card-action'>
                      <Button variant="contained" size='small'>Reconnect with tutor</Button>
                      <span className='cis-rating-box'> 4.0 <Rating value={4} /></span>
                    </div>

                  </CardContent>

                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="cis-teacher-card">
                  <div className='cis-taught-by'>Taught by</div>
                  <div className='cis-teacher-info'>
                    <img src='../../images/teacher-1.png' className='cis-teacher-img' alt='' />
                    <div className='cis-content'>
                        <h5>John Wheeler</h5>
                        <Button variant='outlined'>Connect now</Button>
                    </div>
                  </div>

                </Box>
            </Grid>

          </Grid>
        </div>
      </div>

      <img src='../../images/bottom-bg.png' alt='' className='cloud-img' />
    </>
  );
}

export default QuickCallDashboard;
