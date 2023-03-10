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


import LogoutIcon from '@mui/icons-material/Logout';


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
      <header className='mainHeader'>
        <div className='container'>
          <div className='row'>
            <div className='col-left'>
              <div>
                <img src='../../images/logo.png' alt='' className='' />
              </div>
            </div>
            <div className='col-right'>
              <div>
                <div className='loginuser-menu' onClick={handleClick}>
                  <img src='../../images/user-img.png' alt='' className='' />
                </div>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >

                  <MenuItem disablePadding>
                    Logout
                    <ListItemIcon>
                      <LogoutIcon />
                    </ListItemIcon>
                  </MenuItem>
                  <MenuItem disablePadding>
                    {/* <ListItemIcon> */}
                      <img src='../../images/icon/4.svg' alt='' />
                    {/* </ListItemIcon> */}
                    Get YASAPRO
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </header>
      <img src='../../images/cloud.png' alt='' className='cloud-img' />
      <img src='../../images/icon/4.svg' alt='' className='' />
      <div className='container'>

      </div>
    </>
  );
}

export default QuickCallDashboard;
