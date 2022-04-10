import { Grid, Typography, IconButton, Avatar, InputBase, Button } from '@mui/material'
import React from 'react'
import FlareIcon from '@mui/icons-material/Flare';


import PhotoIcon from '@mui/icons-material/Photo';
import GifIcon from '@mui/icons-material/Gif';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';
import PublicIcon from '@mui/icons-material/Public';

const TweetForm = ({modal, setOpen } : {modal: boolean, setOpen?: () => any}) => {
  return (
    <Grid container  style={{maxWidth: 600, border: "1px solid #eee", padding: 15}}>
      {modal ? <>
        <Grid xs={1} item>
            <IconButton onClick={modal && setOpen != undefined ? () => setOpen() : () => {}}>
              <CloseIcon />
            </IconButton>
        </Grid>
        <Grid xs={11} item />
      </> : 
      <>
        <Grid xs={11} item >
          <Typography variant="h6" style={{fontWeight: 700}}>Home</Typography>
        </Grid>
        <Grid xs={1} item>
            <IconButton>
              <FlareIcon />
            </IconButton>
        </Grid>
      </>
      
      }
      <Grid item xs={2}>
          <Avatar alt="Avatar" className="hoverFx"
          sx={{ width: 55, height: 55, cursor: "pointer", display: "inline-block", marginBottom: 5, marginTop: 1 }}
          src="https://i.pinimg.com/originals/d1/47/e9/d147e940041c8a9a6a4cdf8116271171.jpg" />
      </Grid>
      <Grid item xs={10} style={{position: 'relative'}}>
        <textarea 
        rows={4} cols={50} placeholder='What is happening?'
        style={{width: '100%', border: 'none', outline: 'none', fontSize: 20, borderBottom: '1px solid #eee', marginBottom: 10}}>

        </textarea>
      </Grid>

      <Grid item xs={2}/>

      <Grid item xs={8}>

        <IconButton>
          <PhotoIcon style={{fontSize: 20}} color="primary" />
        </IconButton>

         <IconButton>
          <GifIcon style={{fontSize: 20}} color="primary" />
        </IconButton>

        <IconButton>
          <FormatAlignLeftIcon style={{fontSize: 20}} color="primary" />
        </IconButton>

        <IconButton>
          <SentimentSatisfiedAltIcon style={{fontSize: 20}} color="primary" />
        </IconButton>

        <IconButton>
          <DateRangeIcon style={{fontSize: 20}} color="primary" />
        </IconButton>

        <IconButton>
          <LocationOnIcon style={{fontSize: 20}} color="primary" />
        </IconButton>

      </Grid>

      <Grid item xs={2}>
        <Button variant="contained" style={{borderRadius: 20}} color="primary">
          Tweet
        </Button>
      </Grid>
    </Grid>
  )
}

export default TweetForm;