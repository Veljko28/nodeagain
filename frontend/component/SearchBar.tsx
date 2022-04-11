import { IconButton, InputBase, Paper } from '@mui/material'
import React from 'react'

import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({width} : {width: number}) => {
  return (
    <Paper style={{width: width, borderRadius: 25, backgroundColor: '#fafafa', padding: 2}}>
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 2, mr: 2, width: '75%' }}
        placeholder="Search Twitter"
        inputProps={{ 'aria-label': 'search twitter' }}
      />
    </Paper>
  )
}

export default SearchBar