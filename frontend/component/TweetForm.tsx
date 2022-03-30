import { Grid, Typography, IconButton } from '@mui/material'
import React from 'react'
import FlareIcon from '@mui/icons-material/Flare';

const TweetForm = () => {
  return (
    <Grid container style={{margin: 10}}>
      <Grid item>
        <Grid item container>

          <Grid item xs={10}>
            <Typography variant='h6' style={{display: 'inline-block', marginLeft: 150}}>Home</Typography>
          </Grid>

          <Grid item xs={2}>
            <IconButton>
              <FlareIcon />
            </IconButton>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  )
}

export default TweetForm;