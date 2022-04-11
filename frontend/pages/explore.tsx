import React from 'react'
import Image from 'next/image'
import SearchBar from '../component/SearchBar'

import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { Grid, IconButton } from '@mui/material';

const explore = () => {
  return (
    <div style={{maxWidth: 600, border: '1px solid #ccc', marginTop: 0}}> 
    <Grid container>
        <Grid item xs={11}>
          <SearchBar width={500} />
        </Grid>
        <Grid item xs={1}>
          <IconButton>
            <SettingsApplicationsIcon style={{fontSize: 25}}/>
          </IconButton>
        </Grid>

      <Grid item xs={12} style={{marginTop: 20}}>
        <Image src="/flag-of-ukraine.jpg" width="650px" height="250px" style={{borderRadius: 10}}/>
      </Grid>

    </Grid>
    </div>
  )
}

export default explore