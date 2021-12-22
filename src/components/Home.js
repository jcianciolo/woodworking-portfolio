import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Image from 'mui-image'
import Button from '@mui/material/Button';

const Home = () => {
    return (
        <>
            <Box className="home-page">
                <Box className="home-border">

                    <Box className="home-content">
                        <Typography variant="h1" sx={{ marginBottom: "50px" }}>AJK Woodworking</Typography>
                        <Button size="large" variant="text" className="home-button" sx={{ color: "white" }}>Enter Site</Button>
                    </Box>
                    
                </Box>
                
            </Box>

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