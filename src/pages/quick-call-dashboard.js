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


{/* <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.29801 7.33337L1.38135 2.29171L3.90218 4.58337L5.50635 1.83337L7.11051 4.58337L9.63135 2.29171L8.71468 7.33337H2.29801ZM8.71468 8.70837C8.71468 8.98337 8.53135 9.16671 8.25635 9.16671H2.75635C2.48135 9.16671 2.29801 8.98337 2.29801 8.70837V8.25004H8.71468V8.70837Z" fill="white"/>
</svg> */}





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
                      {/* <ListItemButton> */}
                        Logout
                        <ListItemIcon>
                          <LogoutIcon />
                        </ListItemIcon>
                      {/* </ListItemButton> */}
                    </MenuItem>
                    <MenuItem disablePadding>
                      {/* <ListItemButton> */}
                        <ListItemIcon>
                            <img src='../../images/icon/4.svg' alt='' />
                        </ListItemIcon>
                        Get YASAPRO
                      {/* </ListItemButton> */}
                    </MenuItem>
                  {/* </List> */}
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
