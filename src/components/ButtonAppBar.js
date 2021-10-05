import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Avatar from '@mui/material/Avatar';

export default function ButtonAppBar({ setGallery, setAboutMe, setContact }) {
  const handleClick = (e) => {
    if (e.target.value === 'Gallery') {
        setGallery(true)
        setAboutMe(false)
        setContact(false)
    }

    if (e.target.value === 'About Me') {
      setAboutMe(true)
      setGallery(false)
      setContact(false)
    }

    if (e.target.value === 'Contact') {
      setContact(true)
      setGallery(false)
      setAboutMe(false)
    
}
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" enableColorOnDark>
        <Toolbar sx={{ justifyContent:"space-between" }}>

          <Avatar alt='ajk' src='https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1436844658707-OQ5WMM3I9X4KBPCFISFF/simple+logo+art+and+wood.jpg' />
          <ButtonGroup onClick={handleClick} color="inherit" aria-label="text button group" sx={{ display: { xs: 'none', lg: 'flex' } }}>
            <Button value='Gallery'>Gallery</Button>
            <Button value='About Me'>About Me</Button>
            <Button value='Contact'>Contact</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// <IconButton
// size="large"
// edge="start"
// color="inherit"
// aria-label="menu"
// sx={{ mr: 2 }}
// >
// <MenuIcon />

// </IconButton>