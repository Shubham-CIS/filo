import React from 'react';
import './../session-detail.css';
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
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CircleIcon from '@mui/icons-material/Circle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Stack from '@mui/material/Stack';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Checkbox from '@mui/material/Checkbox';

function SessionDetail() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const [openModal2, setOpenModal2] = React.useState(false);

  const handleClickOpenModal2 = () => {
    setOpenModal2(true);
  };
  const modalhandleClose2 = () => {
    setOpenModal2(false);
  };



  const [checked, setChecked] = React.useState([1]);
  const handleToggleCheckList = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
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
        <div className='welcome-box-wrap cis-session-detail-page'>
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
                <Button size='large' endIcon={<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.375 5.625L10.125 5.625L10.125 12.375L12.375 12.375L12.375 5.625ZM11.25 22.5C17.4656 22.5 22.5 17.4656 22.5 11.25C22.5 5.03437 17.4656 -4.32825e-06 11.25 -3.78487e-06C5.03437 -3.24148e-06 8.57292e-07 5.03437 1.40068e-06 11.25C1.94407e-06 17.4656 5.03438 22.5 11.25 22.5ZM11.25 2.25C16.2112 2.25 20.25 6.28875 20.25 11.25C20.25 16.2112 16.2113 20.25 11.25 20.25C6.28875 20.25 2.25 16.2113 2.25 11.25C2.25 6.28875 6.28875 2.25 11.25 2.25ZM12.375 14.625L10.125 14.625L10.125 16.875L12.375 16.875L12.375 14.625Z" fill="#005DB8" />
                </svg>
                } sx={{ px: 2, py: 1.25 }} onClick={handleClickOpenModal2}>
                  Report
                </Button>

              </Stack>
            </div>
            <hr className='cis-devider-2' />

            <div className='space-20'></div>

            <div className='cis-question-card'>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Card sx={{ display: 'flex' }} className="cis-card">
                    <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                      <CardContent sx={{ flex: '1 1 auto' }}>
                        <h2 className='cis-title-1'>
                          Question
                        </h2>
                        <div className='cis-Chips'>
                          <Chip label="Science" />
                          <Chip label="Chemistry" />
                          <Chip icon={<CalendarTodayIcon />} variant="outlined" label=" 23rd, Jan, 2023" className='cis-chip' />
                          <Chip icon={<WatchLaterIcon />} variant="outlined" label=" 10 mins ago" className='cis-chip' />
                        </div>
                        <h3 className='cis-title-3'>A bullet of mass 20g is horizontally fired with velocity 10m s‐¹ from a pistol of mass 2kg</h3>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Box className="cis-teacher-card">
                    <div className='cis-taught-by'>Answered by</div>
                    <div className='cis-teacher-info'>
                      <img src='../../images/teacher-1.png' className='cis-teacher-img' alt='' />
                      <div className='cis-content'>
                        <h5>Jennifer Wing</h5>
                        <span className='cis-rating-box'> 4.0 <Rating value={4} /></span>
                        <div>
                          <CircleIcon sx={{ color: '#EA4435', fontSize: '12px' }} /> <Box component="span" sx={{ color: '#EA4435' }}>Busy</Box> with YASA Pro Students
                          <Button sx={{ mx: 2, px: 2 }} size='small' variant='outlined'>Connect now</Button>
                        </div>
                      </div>
                    </div>

                  </Box>
                </Grid>
              </Grid>
            </div>


            <div className='cis-space-50'></div>



            <div className='cis-notes-chathistory'>
              <div className='cis-notes-chathistory-btns'>
                <Button variant='contained'>Note</Button>
                <Button variant='outlined'>Chat history</Button>
              </div>
              <div className='cis-notes-chathistory-content'>
                <h3 className='cis-title-4'>Class notes</h3>
                <div className='cis-file-list2'>
                  <Button className='cis-file-btn2'>
                    <img src='../../images/Classnotes-1.png' alt='' />
                  </Button>
                  <Button className='cis-file-btn2'>
                    <img src='../../images/Classnotes-2.png' alt='' />
                  </Button>
                  <Button className='cis-file-btn2'>
                    <img src='../../images/Classnotes-1.png' alt='' />
                  </Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Dialog
        open={openModal2}
        // TransitionComponent={Transition2}
        keepMounted
        onClose={modalhandleClose2}
        aria-describedby="alert-dialog-slide-description"
        className='cis-dialog-2'
      >
        <DialogTitle>Did you find anything wrong with the question</DialogTitle>
        <DialogContent>

          <ul className='cis-checkList'>
            <li>
              <Checkbox edge="end" /> Issues with solution
            </li>
            <li>
              <Checkbox edge="end" /> Report tutor’s behaviour
            </li>
            <li>
              <Checkbox edge="end" /> Inappropriate content
            </li>
            <li>
              <Checkbox edge="end" /> Others
            </li>
          </ul>

        </DialogContent>
        <DialogActions sx={{ justifyContent: 'start' }}>
            <div className='cis-dialog-action'>
              <Button onClick={modalhandleClose2} variant="outlined" size='large' sx={{ px: 5 }}>Back</Button>
              <Button onClick={modalhandleClose2} variant="contained" color='error' size='large' sx={{ px: 5 }}>Submit</Button>
            </div>
        </DialogActions>
      </Dialog>

      <img src='../../images/bottom-bg.png' alt='' className='cloud-img' />
    </>
  );
}

export default SessionDetail;
