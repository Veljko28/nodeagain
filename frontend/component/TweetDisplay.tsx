import { Avatar, Grid, Typography, IconButton } from '@mui/material'
import React from 'react'
import Image from 'next/image';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LoopIcon from '@mui/icons-material/Loop';
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { PostInterface } from './customInterfaces/PostInterface';



const TweetDisplay = ({username, at, time, text, image, comments, retweets, likes } : PostInterface) => {
  return (
    <Grid container className="hoverFx" style={{maxWidth: 500, border: '1px solid #eee', padding: 10}}>
      <Grid item container xs={12}>
        
        <Grid item xs={2}>
          <Avatar alt="Avatar" className="hoverFx"
          sx={{ width: 50, height: 50, cursor: "pointer", display: "inline-block", margin: 1 }}
          src="https://i.pinimg.com/originals/d1/47/e9/d147e940041c8a9a6a4cdf8116271171.jpg" />
      
        </Grid>

        <Grid item xs={9} style={{marginTop: 25}}>
            <span style={{fontWeight:'bold', cursor: 'pointer'}}>{username}</span>
            <span style={{cursor: "pointer"}}> @{at} · {time}</span>
        </Grid>

        <Grid item xs={1}>
          <IconButton color="primary">
            <MoreHorizIcon />
          </IconButton>
        </Grid>


        <Grid item xs={11} >
          <Typography variant="subtitle1" style={{paddingLeft: 10, maxWidth: 600}}>
              {text}
          </Typography>
        </Grid>

        <Grid item xs={1} />
        <Grid item xs={11} style={{paddingLeft:10}}>
          <Image src="/flag-of-ukraine.jpg" width="450px" height="250px" style={{borderRadius: 10}}/>
        </Grid>

        <Grid item xs={1}  />
        <Grid item container xs={11} style={{paddingLeft: 10,marginTop: 10}}>
           <Grid xs={3} item>
             <IconButton style={{color: "#2196f3"}}>
                <ChatBubbleOutlineIcon style={{fontSize: 17}}/>
             </IconButton>
             {comments}
           </Grid>
           <Grid xs={3} item>
             <IconButton style={{color: "#00a152"}}>
                <LoopIcon style={{fontSize: 17}}/>
             </IconButton>
             {retweets}
           </Grid>
           <Grid xs={4} item>
             <IconButton color="primary">
                <FavoriteBorderIcon style={{fontSize: 17}}/> 
             </IconButton>
             {likes}
           </Grid>

            <Grid xs={2} item>
             <IconButton style={{color: "#2196f3"}}>
                <FileUploadIcon style={{fontSize: 20}}/>
             </IconButton>
           </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TweetDisplay