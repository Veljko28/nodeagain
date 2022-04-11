import { Grid } from '@mui/material'
import React from 'react'
import MightLike from '../MightLike'
import SearchBar from '../SearchBar'
import TrendsTab from '../TrendsTab'
import Sidebar from './Sidebar'

const Layout = ({children} : any) => {
  return (
    <Grid container>
      <Grid xs={2} item/>

      <Grid xs={2} item>
        <div style={{position: 'fixed'}}>
          <Sidebar/>
        </div>
      </Grid>

      <Grid xs={4} item>
        {children}
      </Grid>

      <Grid xs={3} item>
        <div style={{position: 'fixed'}}>
          <SearchBar width={350} />
          <MightLike/>
          <TrendsTab/>
        </div>
      </Grid>
    </Grid>
  )
}

export default Layout