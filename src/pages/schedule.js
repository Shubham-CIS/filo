import React from 'react';
import './../schedule.css';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Chip, FormControl, FormControlLabel, IconButton, InputAdornment, OutlinedInput, Popper } from '@mui/material';
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
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SendIcon from '@mui/icons-material/Send';
import Fab from '@mui/material/Fab';
import AttachFileIcon from '@mui/icons-material/AttachFile';

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



                  {/* Schedule Detail page */}
                  <div className='cis-schedule-detail'>
                    <div className='cis-video-card'>
                      <div className='cis-video-box'>
                        <img src='../../images/video.png' alt="" />
                      </div>
                      <Stack className='cis-video-action' direction="row">
                        <Button variant='outlined' size='large' endIcon={<ShareIcon />} sx={{ px: 2, py: 1.25 }}>
                          Share to friend
                        </Button>
                        <Button size='large' endIcon={<BookmarkBorderIcon />} sx={{ px: 2, py: 1.25 }}>
                          Bookmark
                        </Button>
                      </Stack>
                    </div>

                    <div className='space-20'></div>
                    <hr className='cis-divider-2' />

                    <div className='cis-schedule-card'>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                          <Card sx={{ display: 'flex' }} className="cis-card">
                            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                              <CardContent sx={{ flex: '1 1 auto' }}>
                                <h2 className='cis-title-1'>
                                  9th Mathematics
                                </h2>

                                <div className='cis-Chips-2'>
                                  <Chip icon={<WatchLaterIcon />} variant="outlined" label="10 mins ago" />
                                  <Chip icon={<CalendarTodayIcon />} variant="outlined" label="Starts on 23rd, Jan, 2023" />
                                </div>
                                <h3 className='cis-title-3'>Circles</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam mauris et rutrum dapibus. Proin a magna felis.</p>
                              </CardContent>
                            </Box>
                          </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box className="cis-teacher-card">
                            <div className='cis-teacher-info'>
                              <div className='cis-content'>
                                <Button variant='contained' sx={{ px: 2 }} size="small" className="cis-complete-btn">Complete</Button>
                              </div>
                            </div>

                          </Box>
                        </Grid>
                      </Grid>
                    </div>


                    <div className='space-20'></div>
                    <hr className='cis-divider-2' />
                    <div className='space-20'></div>

                    <div className='cis-notes-chathistory'>
                      <div className='cis-notes-chathistory-btns'>
                        <Button variant='contained'>Note</Button>
                        <Button variant='outlined'>Chat history</Button>
                      </div>
                      <div className='cis-notes-chathistory-content'>
                        <h3 className='cis-title-4'>Class notes</h3>
                        <div className='cis-file-list'>
                          <Button className='cis-file-btn'>
                            <img src='../../images/pdf-file.png' alt='' />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Schedule Detail page */}

                  <div className='space-20'></div>
                  <div className='space-20'></div>

                  {/* Schedule page */}
                  <div className='schedule-page' hidden>
                    <Stack direction="row-reverse" spacing={2} className="cis-tab-btns">

                      <FormControlLabel
                        control={
                          <Switch size="large" checked={state.recent} onChange={handleChange3} name="recent" />
                        }
                        label="Recent"
                        className='cis-label-btn'

                      />


                      <Button variant='outlined' endIcon={<FilterListIcon />}>
                        Ascending
                      </Button>


                      <div className='cis-filter-btn'>
                        <Button variant='outlined' endIcon={<FilterAltOutlinedIcon />}
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
                              <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                <CardContent sx={{ flex: '1 1 auto' }}>
                                  <Typography component="div" variant="h5">
                                    Triangle <Button variant='contained' size='small' sx={{ px: 2.5, mx: 1 }} className='cis-join-now-btn'>Join Now</Button>
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
                                  <Button variant='contained' sx={{ px: 2 }} size="small" className="cis-ongoing-btn">On Going</Button>
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
                              <Box sx={{ display: 'flex', flexDirection: 'column', }}>
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
                                  <Button variant='contained' sx={{ px: 2 }} size="small" className="cis-schedule-btn">Schedule</Button>
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
                              <Box sx={{ display: 'flex', flexDirection: 'column', }}>
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
                                  <Button variant='contained' sx={{ px: 2 }} size="small" className="cis-complete-btn">Complete</Button>
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
                  </div>
                  {/* End Schedule page */}




                </TabPanel>

                <TabPanel value={value} index={2}>

                  {/* Test page */}
                  <div className='cis-test-page'>
                    <Stack direction="row-reverse" spacing={2} className="cis-tab-btns">
                      <Button variant='outlined' endIcon={<FilterListIcon />}>
                        Ascending
                      </Button>

                      <div className='cis-filter-btn'>
                        <Button variant='outlined' endIcon={<FilterAltOutlinedIcon />}
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
                              <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                <CardContent sx={{ flex: '1 1 auto' }}>
                                  <Typography component="div" variant="h5">
                                    Triangle
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
                                  <Button variant='contained' sx={{ px: 2 }} size="small" className="cis-ongoing-btn">Upcoming</Button>
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
                              <Box sx={{ display: 'flex', flexDirection: 'column', }}>
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
                                  <Button variant='contained' sx={{ px: 2 }} size="small" className="cis-evaluation-btn">Under Evaluation</Button>
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
                              <Box sx={{ display: 'flex', flexDirection: 'column', }}>
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
                                  <Button variant='contained' sx={{ px: 2 }} size="small" className="cis-complete-btn">Complete</Button>
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
                  </div>
                  {/* End Test page */}

                </TabPanel>

                <TabPanel value={value} index={3}>
                  {/* Document page */}
                  <div className='cis-document-page'>
                    <div className='cis-tab-schedule'>
                      <div className='cis-schedule-card'>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={12}>
                            <Card sx={{ display: 'flex' }} className="cis-card">
                              <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                <CardContent sx={{ flex: '1 1 auto' }}>
                                  <Typography component="div" variant="h5">
                                    Mathematics
                                  </Typography>
                                  <div className='cis-file-list'>
                                    <Link className='cis-file-wrap'>
                                      <img alt='' src='../../images/folder.png' />
                                      <span className='cis-file-name'> 1-Circles</span>
                                    </Link>

                                    <Link className='cis-file-wrap'>
                                      <img alt='' src='../../images/folder.png' />
                                      <span className='cis-file-name'> 2-Geometry</span>
                                    </Link>

                                    <Link className='cis-file-wrap'>
                                      <img alt='' src='../../images/folder.png' />
                                      <span className='cis-file-name'> 3-Geometry</span>
                                    </Link>

                                    <Link className='cis-file-wrap'>
                                      <img alt='' src='../../images/folder.png' />
                                      <span className='cis-file-name'> 4-Triangle</span>
                                    </Link>
                                  </div>
                                </CardContent>
                              </Box>
                            </Card>
                          </Grid>
                        </Grid>
                      </div>

                      <div className='cis-schedule-card'>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={12}>
                            <Card sx={{ display: 'flex' }} className="cis-card">
                              <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                <CardContent sx={{ flex: '1 1 auto' }}>
                                  <Typography component="div" variant="h5">
                                    Physics
                                  </Typography>
                                  <div className='cis-file-list'>
                                    <Link className='cis-file-wrap'>
                                      <img alt='' src='../../images/folder.png' />
                                      <span className='cis-file-name'> Energy</span>
                                    </Link>

                                    <Link className='cis-file-wrap'>
                                      <img alt='' src='../../images/folder.png' />
                                      <span className='cis-file-name'> Momentum</span>
                                    </Link>

                                    <Link className='cis-file-wrap'>
                                      <img alt='' src='../../images/folder.png' />
                                      <span className='cis-file-name'> Gravity</span>
                                    </Link>

                                    <Link className='cis-file-wrap'>
                                      <img alt='' src='../../images/folder.png' />
                                      <span className='cis-file-name'> Momentum</span>
                                    </Link>
                                  </div>
                                </CardContent>
                              </Box>
                            </Card>
                          </Grid>
                        </Grid>
                      </div>

                      <div className='cis-schedule-card'>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={12}>
                            <Card sx={{ display: 'flex' }} className="cis-card">
                              <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                                <CardContent sx={{ flex: '1 1 auto' }}>
                                  <Typography component="div" variant="h5">
                                    Science
                                  </Typography>
                                  <div className='cis-file-list'>
                                    <Link className='cis-file-wrap'>
                                      <img alt='' src='../../images/folder.png' />
                                      <span className='cis-file-name'> Ecosystem</span>
                                    </Link>

                                    <Link className='cis-file-wrap'>
                                      <img alt='' src='../../images/folder.png' />
                                      <span className='cis-file-name'> Chemistry</span>
                                    </Link>

                                    <Link className='cis-file-wrap'>
                                      <img alt='' src='../../images/folder.png' />
                                      <span className='cis-file-name'> Chemistry</span>
                                    </Link>

                                    <Link className='cis-file-wrap'>
                                      <img alt='' src='../../images/folder.png' />
                                      <span className='cis-file-name'> Ecosystem</span>
                                    </Link>
                                  </div>
                                </CardContent>
                              </Box>
                            </Card>
                          </Grid>
                        </Grid>
                      </div>



                    </div>
                  </div>
                  {/* End Document page */}


                </TabPanel>

                <TabPanel value={value} index={4}>
                  <div className='cis-chat-page'>
                    <div className='cis-chat-card'>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                          <div className='cis-chat'>
                            <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                              <div className="cis-send-message">
                                Hello, How are you doing?
                              </div>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'end', flexDirection: 'row', }}>
                              <div className="cis-recieved-message">
                                I am fine, what about you?
                              </div>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                              <div className="cis-send-message">
                                I am fine
                              </div>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                              <div className="cis-send-message">
                                Send notes for mathematics session
                              </div>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'end', flexDirection: 'row', }}>
                              <div className="cis-file-message">
                                <img alt='' src='../../images/chat-img.png' />
                              </div>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'end', flexDirection: 'row', }}>
                              <div className="cis-recieved-message">
                                Lorem ipsum dolor sit amet, consecte
                              </div>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', }}>
                              <div className="cis-send-message">
                                Volutpat consequat lorem. Praesent sit amet quam
                              </div>
                            </Box>
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <div className='cis-chat-action'>
                            <FormControl sx={{ m: 0 }} fullWidth variant="outlined">
                              <OutlinedInput
                                id="outlined-adornment-weight"
                                endAdornment={<InputAdornment position="end">
                                  <IconButton aria-label="Example" sx={{mx:1}}>
                                    <AttachFileIcon />
                                  </IconButton>

                                  <Fab size="small" color="primary" aria-label="Send" sx={{backgroundColor:'#005DB8'}}>
                                    <SendIcon />
                                  </Fab>
                                </InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                                inputProps={{
                                  'aria-label': 'weight',
                                }}
                              />
                              {/* <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText> */}
                            </FormControl>
                          </div>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </TabPanel>

                <TabPanel value={value} index={5}>
                  {/* Payment page */}
                  <div className='cis-payment-page'>
                    <div className="cis-private-class">
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                          <Card sx={{ display: 'flex' }} className="cis-card">
                            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                              <CardContent sx={{ flex: '1 1 auto' }}>

                                <div className='cis-Chips-2'>
                                  <Chip icon={<WatchLaterIcon />} variant="outlined" label="10 mins ago" />
                                  <Chip icon={<CalendarTodayIcon />} variant="outlined" label="Starts on 23rd, Jan, 2023" />
                                </div>

                                <Typography component="div" variant="h5">
                                  30KD
                                </Typography>

                                <p>Private Course of 60 hrs</p>

                              </CardContent>

                            </Box>
                          </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box className="cis-teacher-card">
                            <div className='cis-teacher-info'>
                              <div className='cis-content'>
                                <Button variant='contained' sx={{ px: 2, mb: 2, minWidth: '120px' }} size="small" className="cis-ongoing-btn">Pending</Button>
                                <div className='cis-link-wrap'>
                                  <Link><ContentCopyIcon /> Payment link</Link>
                                </div>
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
                            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                              <CardContent sx={{ flex: '1 1 auto' }}>

                                <div className='cis-Chips-2'>
                                  <Chip icon={<WatchLaterIcon />} variant="outlined" label="10 mins ago" />
                                  <Chip icon={<CalendarTodayIcon />} variant="outlined" label="Starts on 23rd, Jan, 2023" />
                                </div>

                                <Typography component="div" variant="h5">
                                  30KD
                                </Typography>

                                <p>Private Course of 60 hrs</p>

                              </CardContent>

                            </Box>
                          </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box className="cis-teacher-card">
                            <div className='cis-teacher-info'>
                              <div className='cis-content'>
                                <Button variant='contained' sx={{ px: 2, mb: 2, minWidth: '120px' }} size="small" className="cis-complete-btn">Paid</Button>
                                <br />
                                <Button variant='outlined' sx={{ px: 2, minWidth: '120px' }} size="small" className="cis-invoice-btn">Invoice</Button>
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
                            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                              <CardContent sx={{ flex: '1 1 auto' }}>

                                <div className='cis-Chips-2'>
                                  <Chip icon={<WatchLaterIcon />} variant="outlined" label="10 mins ago" />
                                  <Chip icon={<CalendarTodayIcon />} variant="outlined" label="Starts on 23rd, Jan, 2023" />
                                </div>

                                <Typography component="div" variant="h5">
                                  30KD
                                </Typography>

                                <p>Private Course of 60 hrs</p>

                              </CardContent>

                            </Box>
                          </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box className="cis-teacher-card">
                            <div className='cis-teacher-info'>
                              <div className='cis-content'>
                                <Button variant='contained' sx={{ px: 2, mb: 2, minWidth: '120px' }} size="small" className="cis-complete-btn">Paid</Button>
                                <br />
                                <Button variant='outlined' sx={{ px: 2, minWidth: '120px' }} size="small" className="cis-invoice-btn">Invoice</Button>
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
                            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                              <CardContent sx={{ flex: '1 1 auto' }}>

                                <div className='cis-Chips-2'>
                                  <Chip icon={<WatchLaterIcon />} variant="outlined" label="10 mins ago" />
                                  <Chip icon={<CalendarTodayIcon />} variant="outlined" label="Starts on 23rd, Jan, 2023" />
                                </div>

                                <Typography component="div" variant="h5">
                                  30KD
                                </Typography>

                                <p>Private Course of 60 hrs</p>

                              </CardContent>

                            </Box>
                          </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box className="cis-teacher-card">
                            <div className='cis-teacher-info'>
                              <div className='cis-content'>
                                <Button variant='contained' sx={{ px: 2, mb: 2, minWidth: '120px' }} size="small" className="cis-ongoing-btn">Pending</Button>
                                <div className='cis-link-wrap'>
                                  <Link><ContentCopyIcon /> Payment link</Link>
                                </div>
                              </div>
                            </div>
                          </Box>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                  {/* End Payment page */}


                  {/* Payment Detail page */}
                  <div className='cis-payment-detail-page' hidden>

                    <div className='cis-payment-info'>
                      <h2 className='cis-title-5'>30KD</h2>
                      <div className='cis-Chips-2'>
                        <Chip icon={<WatchLaterIcon />} variant="outlined" label="10 mins ago" />
                        <Chip icon={<CalendarTodayIcon />} variant="outlined" label="Starts on 23rd, Jan, 2023" />
                      </div>
                      <p>The above sum has been applied to the sessions listed below.</p>
                    </div>

                    <div className='space-20'></div>
                    <hr className='cis-divider-2' />
                    <div className='space-20'></div>

                    <h3 className='cis-title-1'>Courses</h3>

                    <div className="cis-private-class">
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                          <Card sx={{ display: 'flex' }} className="cis-card">
                            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                              <CardContent sx={{ flex: '1 1 auto' }}>

                                <div className='cis-Chips-2'>
                                  <Chip icon={<WatchLaterIcon />} variant="outlined" label="10 mins ago" />
                                  <Chip icon={<CalendarTodayIcon />} variant="outlined" label="Starts on 23rd, Jan, 2023" />
                                </div>

                                <Typography component="div" variant="h5">
                                  01 Session
                                </Typography>

                                <p>2 hour</p>

                              </CardContent>

                            </Box>
                          </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box className="cis-teacher-card">
                            <div className='cis-teacher-info'>
                              <div className='cis-content'>
                                <h2 className='cis-title-5'>10KD</h2>
                                <div className='cis-link-wrap'>
                                  <Button variant='outlined' sx={{ px: 2, minWidth: '120px' }} size="small" className="cis-invoice-btn">Take me to the course</Button>
                                </div>
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
                            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                              <CardContent sx={{ flex: '1 1 auto' }}>

                                <div className='cis-Chips-2'>
                                  <Chip icon={<WatchLaterIcon />} variant="outlined" label="10 mins ago" />
                                  <Chip icon={<CalendarTodayIcon />} variant="outlined" label="Starts on 23rd, Jan, 2023" />
                                </div>

                                <Typography component="div" variant="h5">
                                  01 Session
                                </Typography>

                                <p>2 hour</p>

                              </CardContent>

                            </Box>
                          </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box className="cis-teacher-card">
                            <div className='cis-teacher-info'>
                              <div className='cis-content'>
                                <h2 className='cis-title-5'>10KD</h2>
                                <div className='cis-link-wrap'>
                                  <Button variant='outlined' sx={{ px: 2, minWidth: '120px' }} size="small" className="cis-invoice-btn">Take me to the course</Button>
                                </div>
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
                            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                              <CardContent sx={{ flex: '1 1 auto' }}>

                                <div className='cis-Chips-2'>
                                  <Chip icon={<WatchLaterIcon />} variant="outlined" label="10 mins ago" />
                                  <Chip icon={<CalendarTodayIcon />} variant="outlined" label="Starts on 23rd, Jan, 2023" />
                                </div>

                                <Typography component="div" variant="h5">
                                  01 Session
                                </Typography>

                                <p>2 hour</p>

                              </CardContent>

                            </Box>
                          </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box className="cis-teacher-card">
                            <div className='cis-teacher-info'>
                              <div className='cis-content'>
                                <h2 className='cis-title-5'>10KD</h2>
                                <div className='cis-link-wrap'>
                                  <Button variant='outlined' sx={{ px: 2, minWidth: '120px' }} size="small" className="cis-invoice-btn">Take me to the course</Button>
                                </div>
                              </div>
                            </div>
                          </Box>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                  {/* End Payment Detail page */}
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
