import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Image from 'mui-image'
import Button from '@mui/material/Button';

const Home = () => {
    return (
        <>
            <Box className="home-page">
                <Button size="large" variant="contained" color="primary" className="home-button">Enter Site</Button>
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