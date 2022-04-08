import { Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const TrendDisplay = ({header,main,num_of_tweets} : {header:string, main: string, num_of_tweets: string}) => {
  return (
    <Grid container style={{paddingLeft: 20, padding: 10, cursor: 'pointer'}} className="hoverFx">
      <Grid xs={10} item >
        <Typography style={{fontSize: 13, color: '#999'}}>{header}</Typography>
        <Typography style={{fontSize: 15, fontWeight: 'bold'}}>{main}</Typography>
        <Typography style={{fontSize: 13, color: '#999'}}>{num_of_tweets}</Typography>
      </Grid>
      <Grid xs={2} item>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
      </Grid>
    </Grid>
  )
}

export default TrendDisplay