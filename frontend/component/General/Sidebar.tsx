import { Grid, Button, IconButton, Typography, List, ListItem, Avatar } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SvgLogo from '../../public/logo.svg';

import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';



const Title = ({name} : {name: string}) => {
  return (
    <Typography variant="h6" style={{marginLeft: 5}}> {name}</Typography>
  )
}

const Sidebar = () => {
  return (
   <Grid container>
      <Grid container item xs={12}>
         <List component="nav" style={{maxWidth: 200}}>
            <Link href="/">
               <IconButton onClick={() => {}} style={{marginLeft: 10}} disableTouchRipple >
                  <Image src={SvgLogo} width="30px" height="30px" />
               </IconButton>
            </Link>

            <Link href="/">
               <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10, display: ''}}>
                  <HomeIcon fontSize='medium'/> 
                  <Title name="Home"/>
               </ListItem>
            </Link>

            <Link href="/explore">
               <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
                  <TagIcon fontSize='medium'/> 
                  <Title name="Explore"/>
               </ListItem>
            </Link>

         <Link href="/notifications">
            <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
               <NotificationsIcon fontSize='medium'/> 
               <Title name="Notifications"/>
            </ListItem>
         </Link>

         <Link href="/messages">
            <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
               <EmailIcon fontSize='medium'/> 
               <Title name="Messages"/>
            </ListItem>
         </Link>

         <Link href="/bookmarks">
            <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
               <BookmarkIcon fontSize='medium'/> 
               <Title name="Bookmarks"/>
            </ListItem>
         </Link>

         <Link href="/lists">
            <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
               <ListAltIcon fontSize='medium'/> 
               <Title name="Lists"/>
            </ListItem>
         </Link>

         <Link href="/profile">
            <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
               <PersonIcon fontSize='medium'/>
               <Title name="Profile"/>
            </ListItem>
         </Link>

         <Link href="/more">
            <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
               <MoreHorizIcon fontSize='medium'/> 
               <Title name="More"/>
            </ListItem>
         </Link>

            <Button disableTouchRipple style={{backgroundColor: 'red', borderRadius: '500px', padding: 15, width: 225, marginLeft: 5}}>
            <Typography variant="h6" style={{marginLeft: 5, color: 'white', fontSize: 15}}> Tweet</Typography>
            </Button>
         </List>

   </Grid>


      <Grid container className="hoverFx" style={{borderRadius: '500px',padding: 10, 
      cursor: "pointer", width: 225, marginLeft: 5, marginTop: 250}}>

         <Grid item xs={4}>
            <Avatar alt="Avatar" className="hoverFx"
            sx={{ width: 50, height: 50, cursor: "pointer", display: "inline-block", margin: 1 }}
            src="https://i.pinimg.com/originals/d1/47/e9/d147e940041c8a9a6a4cdf8116271171.jpg" />
         </Grid>
         <Grid item xs={6} style={{marginTop: 15}}>
            <div>
               <div style={{fontWeight:'bold', cursor: 'pointer'}}>Username</div>
               <span style={{cursor: "pointer"}}> @username</span>
            </div>
         </Grid>
         <Grid item xs={2} style={{marginTop: 15}}>
            <IconButton color="primary">
               <MoreHorizIcon />
            </IconButton>
         </Grid>
      </Grid>
    
    </Grid>
  )
}

export default Sidebar