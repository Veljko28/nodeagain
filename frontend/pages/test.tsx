import { Avatar, Grid, Typography, IconButton } from '@mui/material'
import React from 'react'
import Image from 'next/image';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LoopIcon from '@mui/icons-material/Loop';
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';


// page for testing
const test = () => {
  return (
    <Grid container style={{maxWidth: 750}}>
      <Grid item container xs={12}>
        
        <Grid item xs={1} style={{marginRight: 10}}>
          <Avatar alt="Avatar"
          sx={{ width: 50, height: 50, cursor: "pointer"}}
          src="https://i.pinimg.com/originals/d1/47/e9/d147e940041c8a9a6a4cdf8116271171.jpg" />
        </Grid>

        <Grid item xs={9}>
          <Typography variant="subtitle1" style={{paddingTop: 5}}>
              <span style={{fontWeight:'bold'}}>Username</span>  @username · 1h
          </Typography>
        </Grid>

        <Grid item xs={1}>
          <IconButton color="primary">
            <MoreHorizIcon />
          </IconButton>
        </Grid>

        <Grid item xs={1} />

        <Grid item xs={11} >
          <Typography variant="h6" style={{paddingLeft: 10, maxWidth: 600}}>
            This is a tweet with a lot of text. 
            Testing the text wrapping and the line break.
          </Typography>
        </Grid>

        <Grid item xs={1} />
        <Grid item xs={11} style={{paddingLeft:10}}>
          <Image src="/flag-of-ukraine.jpg" width="600px" height="250px" style={{borderRadius: 10}}/>
        </Grid>

        <Grid item xs={1}  />
        <Grid item container xs={11} style={{paddingLeft: 10,marginTop: 10}}>
           <Grid xs={3} item>
             <IconButton style={{color: "#2196f3"}}>
                <ChatBubbleOutlineIcon style={{fontSize: 17}}/>
             </IconButton>
             15
           </Grid>
           <Grid xs={3} item>
             <IconButton style={{color: "#00a152"}}>
                <LoopIcon style={{fontSize: 17}}/>
             </IconButton>
             7
           </Grid>
           <Grid xs={3} item>
             <IconButton color="primary">
                <FavoriteBorderIcon style={{fontSize: 17}}/> 
             </IconButton>
             31
           </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default test