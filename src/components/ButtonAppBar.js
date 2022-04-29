import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';


export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar enableColorOnDark position='static' sx={{ backgroundColor: '#041C32' }}>
        <Toolbar sx={{ justifyContent:"space-between" }}>
        <Link className="link" to="/">
          <Avatar alt='ajk' src='https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1436844658707-OQ5WMM3I9X4KBPCFISFF/simple+logo+art+and+wood.jpg' />
        </Link>
          <div>
            <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    Dashboard
            </Button>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            >
            <MenuItem value='Gallery' onClick={handleClose}><Link className="link" to="/gallery">Gallery</Link></MenuItem>
            <MenuItem value='About Me' onClick={handleClose}><Link className="link" to="/about">About Me</Link></MenuItem>
            <MenuItem value='Contact' onClick={handleClose}><Link className="link" to="/contact">Contact</Link></MenuItem>
            </Menu>
          </div>

          
        </Toolbar>
      </AppBar>
    </Box>
  );
}


// <ButtonGroup color="inherit" variant="text" aria-label="text button group">
//             <Button value='Gallery'><Link className="link" to="/gallery">Gallery</Link></Button>
//             <Button value='About Me'><Link className="link" to="/about">About Me</Link></Button>
//             <Button value='Contact'><Link className="link" to="/contact">Contact</Link></Button>
//           </ButtonGroup>