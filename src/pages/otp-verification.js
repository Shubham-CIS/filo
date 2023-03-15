import React  from 'react';
import './../otp-verification.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { MuiOtpInput } from 'mui-one-time-password-input'
import { Link } from 'react-router-dom';


function OtpVerification() {

  const [otp, setOtp] = React.useState('')

  const handleChange = (newValue) => {
    setOtp(newValue)
  }

  return (
    <>

      <div className='container'>
        <Grid container className="formblock" component={Paper} elevation={6}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={12}
            md={6}
            sx={{
              backgroundImage: 'url(../../images/loginBg.png)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'top center',
            }}
          />
          <Grid item xs={12} sm={12} md={6} square className='form-wrap'>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              


              <Box component="form" noValidate sx={{ mt: 1 }}>
                <div className='mb-20'>
                  
                  <h2 className='title2'>OTP Verification</h2> 
                  <p className='title-info '>We have send Verification code to 
                  <br />
                  <span>+9876543210</span> <Link>Change Number?</Link>
                   </p>
                   <p className='title-info '><span>Didn't Recieved?</span> <Link>Resend OTP</Link></p>
                </div>
                <div fullWidth className='mb-20 cis-otp-screen'>
                  <MuiOtpInput value={otp} onChange={handleChange} />
                </div>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 3,pt:1.5, pb:1.5, fontSize: '20px', textTransform: "none" }}
                  size="large"
                  href='/login2'
                  className='cis-btn'
                >
                  Login
                </Button>
                
               
                
                
                  
              </Box>
            </Box>
          </Grid>
        </Grid>
        </div>




    </>
  );
}

export default OtpVerification;
