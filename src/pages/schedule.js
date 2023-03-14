import React from 'react';
import './../schedule.css';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, FormControlLabel, Popper } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import Rating from '@mui/material/Rating';
// import Chip from '@mui/material/Chip';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TextField from '@mui/material/TextField';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Switch from '@mui/material/Switch';
// import FormGroup from '@mui/material/FormGroup';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FilterListIcon from '@mui/icons-material/FilterList';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Stack from '@mui/material/Stack';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Paper from '@mui/material/Paper';
// import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuList from '@mui/material/MenuList';





function Schedule() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  
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
const [value, setValue] = React.useState(0);
const handleChange2 = (event: React.SyntheticEvent, newValue: number) => {
  setValue(newValue);
};


const [state, setState] = React.useState({
  recent: true,
  jason: false,
  antoine: true,
});

const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
  setState({
    ...state,
    [event.target.name]: event.target.checked,
  });
};



const options = ['Options 1', 'Options 2', 'Options 3'];

const [openDropDown, setOpenDropDown] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  // const handleClick4 = () => {
  //   console.info(`You clicked ${options[selectedIndex]}`);
  // };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpenDropDown(false);
  };

  const handleToggle4 = () => {
    setOpenDropDown((prevOpenDropDown) => !prevOpenDropDown);
  };

  // const handleClose4 = (event) => {
  //   if (anchorRef.current && anchorRef.current.contains(event.target)) {
  //     return;
  //   }
  //   setOpenDropDown(false);
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

          <div className='whitebox-wrap cis-schedule-cards pt-0'>
          <Grid item xs={12} sm={12} md={12} className="cis-tabs">
              <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange2} aria-label="basic tabs example">
                    <Tab label="Overview" {...a11yProps(0)} />
                    <Tab label="Schedule" {...a11yProps(1)} />
                    <Tab label="Tests" {...a11yProps(2)} />
                    <Tab label="Documents" {...a11yProps(3)} />
                    <Tab label="Chats" {...a11yProps(4)} />
                    <Tab label="Payments" {...a11yProps(5)} />
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
                      <Stack direction="row-reverse"  spacing={2} className="cis-tab-btns">
                        
                        <FormControlLabel
                            control={
                              <Switch size="large" checked={state.recent} onChange={handleChange3} name="recent" />
                            }
                            label="Recent"
                            className='cis-label-btn'
                            
                          />
                      

                        <Button variant='outlined' endIcon={<FilterListIcon /> }>
                            Ascending
                        </Button>
                          
                        
                        <div className='cis-filter-btn'>
                        <Button variant='outlined' endIcon={<FilterAltOutlinedIcon /> }
                            aria-controls={openDropDown ? 'split-button-menu' : undefined}
                            aria-expanded={openDropDown ? 'true' : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={handleToggle4}
                            >
                          Filter
                        </Button>
                        <Popper
                          sx={{
                            zIndex: 1,
                          }}
                          open={openDropDown}
                          anchorEl={anchorRef.current}
                          role={undefined}
                          transition
                          disablePortal
                        >
                          {({ TransitionProps, placement }) => (
                            <Grow
                              {...TransitionProps}
                              style={{
                                transformOrigin:
                                  placement === 'bottom' ? 'center top' : 'center bottom',
                              }}
                            >
                              <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                  <MenuList id="split-button-menu" autoFocusItem>
                                    {options.map((option, index) => (
                                      <MenuItem
                                        key={option}
                                        disabled={index === 2}
                                        selected={index === selectedIndex}
                                        onClick={(event) => handleMenuItemClick(event, index)}
                                      >
                                        {option}
                                      </MenuItem>
                                    ))}
                                  </MenuList>
                                </ClickAwayListener>
                              </Paper>
                            </Grow>
                          )}
                        </Popper>
                        </div>

                    </Stack>

                      <div className='cis-tab-schedule'>
                        <div className='cis-schedule-card'>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={8}>
                              <Card sx={{ display: 'flex' }} className="cis-card">
                                <Box sx={{ display: 'flex', flexDirection: 'column',}}>
                                  <CardContent sx={{ flex: '1 1 auto' }}>
                                    <Typography component="div" variant="h5">
                                      Triangle <Button variant='contained' size='small' sx={{px:2.5, mx:1}}  className='cis-join-now-btn'>Join Now</Button>
                                    </Typography>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam mauris et rutrum dapibus. Proin a magna felis.</p>
                                  </CardContent>
                                </Box>
                              </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <Box className="cis-teacher-card">
                                  <div className='cis-teacher-info'>
                                    <div className='cis-content'>
                                        <Button variant='contained' sx={{px:2}} size="small" className="cis-ongoing-btn">On Going</Button>
                                        <ul className='cis-info-list'>
                                          <li>
                                                <CalendarTodayIcon />
                                                23rd, Jan, 2023
                                          </li>
                                          <li>
                                          <WatchLaterIcon /> 
                                          04:00 pm to 05:00 pm
                                          </li>
                                        </ul>
                                        
                                        
                                        
                                    </div>
                                  </div>

                                </Box>
                            </Grid>
                          </Grid>
                        </div>
                        
                        <div className='cis-schedule-card'>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={8}>
                              <Card sx={{ display: 'flex' }} className="cis-card">
                                <Box sx={{ display: 'flex', flexDirection: 'column',}}>
                                  <CardContent sx={{ flex: '1 1 auto' }}>
                                    <Typography component="div" variant="h5">
                                    Geometry 02 
                                    </Typography>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam mauris et rutrum dapibus. Proin a magna felis.</p>
                                  </CardContent>
                                </Box>
                              </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <Box className="cis-teacher-card">
                                  <div className='cis-teacher-info'>
                                    <div className='cis-content'>
                                        <Button variant='contained' sx={{px:2}} size="small" className="cis-schedule-btn">Schedule</Button>
                                        <ul className='cis-info-list'>
                                          <li>
                                                <CalendarTodayIcon />
                                                23rd, Jan, 2023
                                          </li>
                                          <li>
                                          <WatchLaterIcon /> 
                                          04:00 pm to 05:00 pm
                                          </li>
                                        </ul>
                                        
                                        
                                        
                                    </div>
                                  </div>

                                </Box>
                            </Grid>
                          </Grid>
                        </div>

                        <div className='cis-schedule-card'>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={8}>
                              <Card sx={{ display: 'flex' }} className="cis-card">
                                <Box sx={{ display: 'flex', flexDirection: 'column',}}>
                                  <CardContent sx={{ flex: '1 1 auto' }}>
                                    <Typography component="div" variant="h5">
                                      Geometry 02 
                                    </Typography>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam mauris et rutrum dapibus. Proin a magna felis.</p>
                                  </CardContent>
                                </Box>
                              </Card>
                            </Grid>
                            <Grid item xs={12} md={4}>
                              <Box className="cis-teacher-card">
                                  <div className='cis-teacher-info'>
                                    <div className='cis-content'>
                                        <Button variant='contained' sx={{px:2}} size="small" className="cis-complete-btn">Complete</Button>
                                        <ul className='cis-info-list'>
                                          <li>
                                                <CalendarTodayIcon />
                                                23rd, Jan, 2023
                                          </li>
                                          <li>
                                          <WatchLaterIcon /> 
                                          04:00 pm to 05:00 pm
                                          </li>
                                        </ul>
                                        
                                        
                                        
                                    </div>
                                  </div>

                                </Box>
                            </Grid>
                          </Grid>
                        </div>

                      </div>

                </TabPanel>
                
                <TabPanel value={value} index={2}>
                    <h3 className='cis-title-1'>Tab data 2</h3>
                </TabPanel>
                
                <TabPanel value={value} index={3}>
                <h3 className='cis-title-1'>Tab data 3</h3>
                </TabPanel>
                
                <TabPanel value={value} index={4}>
                <h3 className='cis-title-1'>Tab data 4</h3>
                </TabPanel>
                
                <TabPanel value={value} index={5}>
                <h3 className='cis-title-1'>Tab data 5</h3>
                </TabPanel>
              </Box>
            </Grid>

          </div>

         




        </div>
      </div>

      <img src='../../images/bottom-bg.png' alt='' className='cloud-img' />
    </>
  );
}

export default Schedule;
