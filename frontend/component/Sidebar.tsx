import { Grid, Button, IconButton, Typography, List, ListItem } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import SvgLogo from '../public/logo.svg';

import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Sidebar = () => {
  return (
    <List component="nav">
      <IconButton onClick={() => {}} style={{margin: 10}} disableTouchRipple >
          <Image src={SvgLogo} width="30px" height="30px" />
      </IconButton>

       <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10, display: ''}}>
         <HomeIcon fontSize='medium'/> 
          <Typography variant="h6" style={{marginLeft: 5}}> Home</Typography>
      </ListItem>

      <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
         <TagIcon fontSize='medium'/> 
          <Typography variant="h6" style={{marginLeft: 5}}> Explore</Typography>
      </ListItem>

      <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
         <NotificationsIcon fontSize='medium'/> 
          <Typography variant="h6" style={{marginLeft: 5}}> Notifications</Typography>
      </ListItem>

      <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
         <EmailIcon fontSize='medium'/> 
          <Typography variant="h6" style={{marginLeft: 5}}> Messages</Typography>
      </ListItem>

      <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
         <BookmarkIcon fontSize='medium'/> 
          <Typography variant="h6" style={{marginLeft: 5}}> Bookmarks</Typography>
      </ListItem>

      <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
         <ListAltIcon fontSize='medium'/> 
          <Typography variant="h6" style={{marginLeft: 5}}> Lists</Typography>
      </ListItem>

      <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
         <PersonIcon fontSize='medium'/> 
          <Typography variant="h6" style={{marginLeft: 5}}> Profile</Typography>
      </ListItem>

      <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
         <MoreHorizIcon fontSize='medium'/> 
          <Typography variant="h6" style={{marginLeft: 5}}> More</Typography>
      </ListItem>


      <Button style={{backgroundColor: 'red', borderRadius: '500px', padding: 15, width: 250, marginLeft: 5}}>
        <Typography variant="h6" style={{marginLeft: 5, color: 'white', fontSize: 15}}> Tweet</Typography>
      </Button>
    </List>
  )
}

export default Sidebar