import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

export default function ButtonAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" enableColorOnDark>
        <Toolbar sx={{ justifyContent:"space-between" }}>
        <Link className="link" to="/gallery">
          <Avatar alt='ajk' src='https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1436844658707-OQ5WMM3I9X4KBPCFISFF/simple+logo+art+and+wood.jpg' />
        </Link>
          <ButtonGroup color="inherit"  aria-label="text button group">
            <Button value='Gallery'><Link className="link" to="/gallery">Gallery</Link></Button>
            <Button value='About Me'><Link className="link" to="/about">About Me</Link></Button>
            <Button value='Contact'><Link className="link" to="/contact">Contact</Link></Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
//   const handleClick = (e) => {
//     if (e.target.value === 'Gallery') {
//         setGallery(true)
//         setAboutMe(false)
//         setContact(false)
//     }

//     if (e.target.value === 'About Me') {
//       setAboutMe(true)
//       setGallery(false)
//       setContact(false)
//     }

//     if (e.target.value === 'Contact') {
//       setContact(true)
//       setGallery(false)
//       setAboutMe(false)
    
// }
//   }