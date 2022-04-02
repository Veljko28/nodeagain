import { Grid } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({children} : any) => {
  return (
    <Grid container>
      <Grid xs={2} item/>

      <Grid xs={2} item>
        <Sidebar/>
      </Grid>

      <Grid xs={5} item>
        {children}
      </Grid>

      <Grid xs={2} item/>
    </Grid>
  )
}

export default Layout