import React from 'react';
import './../session-history.css';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import Paper from '@mui/material/Paper';

import LogoutIcon from '@mui/icons-material/Logout';

import { Button, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CircleIcon from '@mui/icons-material/Circle';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuList from '@mui/material/MenuList';
import Popper from '@mui/material/Popper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function SessionHistory() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = ['Options 1', 'Options 2', 'Options 3'];
  const [openDropDown, setOpenDropDown] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpenDropDown(false);
  };

  const handleToggle4 = () => {
    setOpenDropDown((prevOpenDropDown) => !prevOpenDropDown);
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

      <div className='container cis-session-history-page'>
        <div className='welcome-box-wrap'>
          <Grid className='whitebox-wrap cis-tutor-cards' container spacing={2}>
            <Grid item xs={12}>
              <div className='cis-title-2col'>
                <h2 className='cis-title-1 mb-0'>Session History</h2>
                <div>
                  <Button variant="outlined" size='large' sx={{ width: '160px' }}>Back</Button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className='cis-title-2col'>
                <div className='cis-search-btn'>
                  <FormControl sx={{ width: '25ch' }} variant="outlined">
                    <OutlinedInput
                      size='large'
                      id="outlined-adornment-weight"
                      endAdornment={<InputAdornment position="end">
                        <IconButton aria-label="delete">
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>}
                      aria-describedby="outlined-weight-helper-text"
                      placeholder='Search'
                    />
                  </FormControl>
                </div>

                <div className='cis-filter-btn'>
                  <Button variant='outlined'
                    endIcon={<FilterAltOutlinedIcon sx={{ mx: 0.2 }} />}
                    startIcon={<KeyboardArrowDownIcon sx={{ mx: 0.2 }} />}
                    aria-controls={openDropDown ? 'split-button-menu' : undefined}
                    aria-expanded={openDropDown ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle4}
                    size='medium'
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
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className='cis-Chips'>
                <Chip icon={<WatchLaterIcon />} variant="outlined" label=" 10 mins ago" className='cis-chip' />
                <Chip label="Chemistry" />
                <Chip label="Science" />
              </div>
              <h2 className='cis-title-1'>A bullet of mass 20g is horizontally fired with velocity 10m s‐¹ from a pistol of mass 2kg</h2>
              <Box className="cis-teacher-card">
                <div className='cis-taught-by'>Answered by</div>
                <div className='cis-teacher-info'>
                  <img src='../../images/teacher-1.png' className='cis-teacher-img' alt='' />
                  <div className='cis-content'>
                    <h5>Jennifer Wing</h5>
                    <span className='cis-rating-box'> 4.0 <Rating value={4} /></span>
                    <div>
                      <CircleIcon sx={{ color: '#EA4435', fontSize: '12px' }} /> <Box component="span" sx={{ color: '#EA4435' }}>Busy</Box> with YASA Pro Students
                      <Button sx={{ mx: 2, px: 2 }} size='small' variant='outlined'>Ask again</Button>
                      <Button sx={{ mx: 0, px: 2 }} size='small' variant='outlined' className='cis-connect-btn'>Connect now</Button>
                    </div>
                  </div>
                </div>
              </Box>
            </Grid>

            <hr className='cis-devider' />

            <Grid item xs={12}>
              <div className='cis-Chips'>
                <Chip icon={<WatchLaterIcon />} variant="outlined" label=" 10 mins ago" className='cis-chip' />
                <Chip label="Chemistry" />
                <Chip label="Science" />
              </div>
              <h2 className='cis-title-1'>A bullet of mass 20g is horizontally fired with velocity 10m s‐¹ from a pistol of mass 2kg</h2>
              <Box className="cis-teacher-card">
                <div className='cis-taught-by'>Answered by</div>
                <div className='cis-teacher-info'>
                  <img src='../../images/teacher-2.png' className='cis-teacher-img' alt='' />
                  <div className='cis-content'>
                    <h5>Peter Geller</h5>
                    <span className='cis-rating-box'> 4.0 <Rating value={4} /></span>
                    <div>
                      <CircleIcon sx={{ color: '#60CC1F', fontSize: '12px' }} />  Peter Geller is <Box component="span" sx={{ color: '#60CC1F' }}> Online</Box> now
                      <Button sx={{ mx: 2, px: 2 }} size='small' variant='outlined'>Ask again</Button>
                      <Button sx={{ mx: 0, px: 2 }} size='small' variant='outlined' className='cis-connect-btn'>Connect now</Button>
                    </div>
                  </div>
                </div>
              </Box>
            </Grid>
          
            <hr className='cis-devider' />

            <Grid item xs={12}>
              <div className='cis-Chips'>
                <Chip icon={<WatchLaterIcon />} variant="outlined" label=" 10 mins ago" className='cis-chip' />
                <Chip label="Chemistry" />
                <Chip label="Science" />
              </div>
              <h2 className='cis-title-1'>A bullet of mass 20g is horizontally fired with velocity 10m s‐¹ from a pistol of mass 2kg</h2>
              <Box className="cis-teacher-card">
                <div className='cis-taught-by'>Answered by</div>
                <div className='cis-teacher-info'>
                  <img src='../../images/teacher-3.png' className='cis-teacher-img' alt='' />
                  <div className='cis-content'>
                    <h5>Jennifer Wing</h5>
                    <span className='cis-rating-box'> 4.0 <Rating value={4} /></span>
                    <div>
                      <CircleIcon sx={{ color: '#EA4435', fontSize: '12px' }} /> <Box component="span" sx={{ color: '#EA4435' }}>Busy</Box> with YASA Pro Students
                      <Button sx={{ mx: 2, px: 2 }} size='small' variant='outlined'>Ask again</Button>
                      <Button sx={{ mx: 0, px: 2 }} size='small' variant='outlined' className='cis-connect-btn'>Connect now</Button>
                    </div>
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

export default SessionHistory;
