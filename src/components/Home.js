import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Image from 'mui-image'
import Button from '@mui/material/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div className="home-page">
                <div className="home-border">

                    <div className="home-content">
                        <h1 className="homepage-title">AJK Woodworking</h1>
                        <Link to="/gallery">
                            <Button size="large" variant="text" className="home-button" sx={{ borderColor: 'white', color: "white", fontWeight: 700 , fontSize: 24, mb: '30px' }}>Enter Gallery</Button>
                        </Link>
                        
                    </div>
                    
                </div>
                
            </div>

        </>
    )
}

export default Home


// <Image
//                     src="https://picsum.photos/2000"
//                     height="auto"
//                     width="100%"
//                     fit="cover"
//                     duration={3000}
//                     easing="cubic-bezier(0.7, 0, 0.6, 1)"
//                     showLoading={ false }
//                     errorIcon={ false }
//                     shift={ null }
//                     distance="100px"
//                     shiftDuration={900}
//                     bgColor="inherit"
//                     className="home-image"
//                 />