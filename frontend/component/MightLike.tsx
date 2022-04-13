import { Avatar, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'



const UserMap = ({username, at} : {username: string, at: string}) => {

  return (
  <Link href={`${username}`}>
    <Grid container style={{padding: 5}} className="hoverFx">
       <Grid item xs={2}>
            <Avatar alt="Avatar" className="hoverFx"
            sx={{ width: 50, height: 50, cursor: "pointer", display: "inline-block", margin: 1 }}
            src="https://i.pinimg.com/originals/d1/47/e9/d147e940041c8a9a6a4cdf8116271171.jpg" />
         </Grid>
         <Grid item xs={6} style={{marginTop: 15, paddingLeft: 10}}>
            <div>
               <div style={{fontWeight:'bold', cursor: 'pointer'}}>{username}</div>
               <span style={{cursor: "pointer"}}> @{at}</span>
            </div>
         </Grid>
         <Grid item xs={2} style={{marginTop: 15}}>
              <Button variant="contained" style={{backgroundColor: '#000', color: '#fff', borderRadius: '20px'}}>
                Follow
              </Button>
         </Grid>
      </Grid>
   </Link>
  )
}

const MightLike = () => {
  
  const a = [
    {
    username: 'Username1',
    at: 'username1'
  },
  {
    username: 'Username2',
    at: 'username2'
  },
  {
    username: 'Username3',
    at: 'username3'
  }
];

  return (
    <div style={{marginTop: 10, marginBottom: 10, backgroundColor: '#fafafa', width: 350, borderRadius: 20}}>
      <Typography variant="h6" style={{padding: 15, fontWeight: '800'}}>You might like</Typography>
      {a.map((x,idx) => <UserMap key={idx} {...x}/>)}
      <Typography color="primary" className="hoverFx" 
      style={{padding: 15, borderEndEndRadius: 25, borderEndStartRadius: 25, cursor: 'pointer'}} >Show more</Typography>
    </div>
  )
}

export default MightLike