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



const Title = ({name} : {name: string}) => {
  return (
    <Typography variant="h6" style={{marginLeft: 5}}> {name}</Typography>
  )
}

const Sidebar = () => {
  return (
    <List component="nav">
      <IconButton onClick={() => {}} style={{margin: 10}} disableTouchRipple >
          <Image src={SvgLogo} width="30px" height="30px" />
      </IconButton>

       <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10, display: ''}}>
         <HomeIcon fontSize='medium'/> 
          <Title name="Home"/>
      </ListItem>

      <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
         <TagIcon fontSize='medium'/> 
         <Title name="Explore"/>
      </ListItem>

      <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
         <NotificationsIcon fontSize='medium'/> 
         <Title name="Notifications"/>
      </ListItem>

      <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
         <EmailIcon fontSize='medium'/> 
         <Title name="Messages"/>
      </ListItem>

      <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
         <BookmarkIcon fontSize='medium'/> 
         <Title name="Bookmarks"/>
      </ListItem>

      <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
         <ListAltIcon fontSize='medium'/> 
         <Title name="Lists"/>
      </ListItem>

      <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
         <PersonIcon fontSize='medium'/>
         <Title name="Profile"/>
      </ListItem>

      <ListItem button disableRipple onClick={() => {}} style={{borderRadius: '500px', color: 'black', margin: 10}}>
         <MoreHorizIcon fontSize='medium'/> 
         <Title name="More"/>
      </ListItem>


      <Button style={{backgroundColor: 'red', borderRadius: '500px', padding: 15, width: 250, marginLeft: 5}}>
        <Typography variant="h6" style={{marginLeft: 5, color: 'white', fontSize: 15}}> Tweet</Typography>
      </Button>
    </List>
  )
}

export default Sidebar