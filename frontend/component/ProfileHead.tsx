import React from 'react';
import { Button, Grid, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Verified from '../public/verified.svg';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';


const ProfileHead = () => {
  return (
    <Grid container style={{border: '1px solid #eee', maxWidth: 600}}>
      <Grid container item xs={12} style={{padding: "10px 10px 0 10px"}}>
        <Grid item xs={1}>
          <Link href="/">
            <IconButton>
              <ArrowBackIcon/>
            </IconButton>
          </Link>
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h6">Username</Typography>
          <div style={{fontSize: 12}}>2 Tweets</div>
        </Grid>
      </Grid>


      <Grid item xs={12} style={{marginTop: 5, backgroundImage: "url('/background.png')", height: 175, paddingLeft: 25}}>
        <div style={{position: 'absolute', top: 175, border: '4px solid white', borderRadius: 100}}>

              <Image src="/avatar.jpg" width="125px" height="125px" 
              style={{borderRadius: 100, position: 'absolute'}} />
        </div>
      </Grid>

      <Grid item xs={12} style={{display: 'flex', justifyContent: 'flex-end', padding: 10}}>
        <Button variant="outlined" style={{color: 'black', borderColor: '#999', borderRadius: 500}}>
             Set up Profile
        </Button>
      </Grid>

      <div style={{padding: 20}}>
        <Grid container item xs={12} style={{marginTop: 5}}>
          <Typography variant="h5" style={{fontWeight: 'bold'}}>
            Username
            <Image src={Verified} width="25px" height="25px" style={{paddingTop: 5}} />
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          <Typography variant="subtitle1" style={{color: '#999'}}>@username</Typography>
        </Grid>
        <Grid container item xs={12}>
          <CalendarMonthOutlinedIcon style={{color: '#999'}}/>
          <Typography variant="subtitle1" style={{color: '#999',marginLeft: 5}}>Joined April 2022</Typography>
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