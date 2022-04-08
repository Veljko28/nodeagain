import { Grid } from '@mui/material'
import React from 'react'
import SearchBar from '../SearchBar'
import TrendsTab from '../TrendsTab'
import Sidebar from './Sidebar'

const Layout = ({children} : any) => {
  return (
    <Grid container>
      <Grid xs={2} item/>

      <Grid xs={2} item>
        <Sidebar/>
      </Grid>

      <Grid xs={4} item>
        {children}
      </Grid>

      <Grid xs={3} item>
        <SearchBar/>
        <TrendsTab/>
      </Grid>
    </Grid>
  )
}

export default Layout