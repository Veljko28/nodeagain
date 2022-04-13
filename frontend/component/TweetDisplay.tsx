import { Avatar, Grid, Typography, IconButton } from '@mui/material'
import React from 'react'
import Image from 'next/image';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LoopIcon from '@mui/icons-material/Loop';
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { PostInterface } from './customInterfaces/PostInterface';
import TweetPostModal from './TweetPostModal';



const TweetDisplay = ({post} : {post: PostInterface}) => {

  const [open,setOpen] = React.useState(false);

  return (
    <span onClick={() => setOpen(true)}>
      <Grid container className="hoverFx" style={{maxWidth: 600, border: '1px solid #eee', padding: 10}}>
        <Grid item container xs={12}>
          
          <Grid item xs={1}>
            <Avatar alt="Avatar" className="hoverFx"
            sx={{ width: 55, height: 55, cursor: "pointer", display: "inline-block", marginTop: 1 }}
            src="https://i.pinimg.com/originals/d1/47/e9/d147e940041c8a9a6a4cdf8116271171.jpg" />
        
          </Grid>

          <Grid item container xs={11} style={{marginTop: 15}}>
            
            <Grid item xs={10} style={{ paddingLeft: 12}}>
                <span style={{fontWeight:'bold', cursor: 'pointer'}}>{post.username}</span>
                <span style={{cursor: "pointer"}}> @{post.at} · {post.time}</span>
            </Grid>

            <Grid item xs={1}>
              <IconButton color="primary">
                <MoreHorizIcon />
              </IconButton>
            </Grid>


            <Grid item xs={11} >
              <Typography variant="subtitle1" style={{paddingLeft: 10, maxWidth: 600}}>
                  {post.text}
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
                {post.comments}
              </Grid>
              <Grid xs={3} item>
                <IconButton style={{color: "#00a152"}}>
                    <LoopIcon style={{fontSize: 17}}/>
                </IconButton>
                {post.retweets}
              </Grid>
              <Grid xs={4} item>
                <IconButton color="primary">
                    <FavoriteBorderIcon style={{fontSize: 17}}/> 
                </IconButton>
                {post.likes}
              </Grid>

                <Grid xs={2} item>
                <IconButton style={{color: "#2196f3"}}>
                    <FileUploadIcon style={{fontSize: 20}}/>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
        <TweetPostModal post={post} open={open} setOpen={() => setOpen(false)}/>
      </Grid>
    </span>
  )
}

export default TweetDisplay