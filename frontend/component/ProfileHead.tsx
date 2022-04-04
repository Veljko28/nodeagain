import React from 'react';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import Image from 'next/image';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';


const ProfileHead = () => {
  return (
    <Grid container style={{border: '1px solid #eee', maxWidth: 600}}>
      <Grid container item xs={12} style={{padding: "10px 10px 0 10px"}}>
        <Grid item xs={1}>
         <IconButton>
          <ArrowBackIcon/>
         </IconButton>
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h6">Username</Typography>
          <div style={{fontSize: 12}}>2 Tweets</div>
        </Grid>
      </Grid>

      <Grid container item xs={12} style={{marginTop: 5}}>
        <Image src="/background.png" width="600px" height="225px" />
      </Grid>

      <Grid container item xs={12} style={{marginTop: 5,padding: 10}}>
        <Grid item xs={9}>
          <Image src="/avatar.jpg" width="150px" height="150px" 
          style={{borderRadius: 100, border: '2px solid white', position: 'absolute'}} />
        </Grid>

        <Grid item xs={3}>
          <Button variant="outlined" style={{color: 'black', borderColor: '#999', borderRadius: 500}}>
            Set up Profile
          </Button>
        </Grid>
      </Grid>

      <div style={{padding: 20}}>
        <Grid container item xs={12} style={{marginTop: 5}}>
          <Typography variant="h5" style={{fontWeight: 'bold'}}>Username</Typography>
        </Grid>
        <Grid container item xs={12}>
          <Typography variant="subtitle1" style={{color: '#999'}}>@username</Typography>
        </Grid>
        <Grid container item xs={12}>
          <CalendarMonthOutlinedIcon/>
          <Typography variant="subtitle1" style={{color: '#999'}}>Joined April 2022</Typography>
        </Grid>
        <Grid container item xs={12}>
          <Typography variant="subtitle1" style={{color: '#999'}}>
            <span style={{color: "black", marginLeft: 5}}> 56 </span>
            Following
          </Typography>
          <Typography variant="subtitle1" style={{color: '#999'}}>
            <span style={{color: "black", marginLeft: 5}}> 47 </span>
            Followers
          </Typography>
        </Grid>
      </div>

    </Grid>
  )
}

export default ProfileHead