import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link'

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
      <AppBar position="static" sx={{ bgcolor: 'text.secondary' }} enableColorOnDark>
        <Toolbar sx={{ justifyContent:"space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

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
