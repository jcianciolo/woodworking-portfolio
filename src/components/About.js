import React from 'react'
import Typography from '@mui/material/Typography'

const About = () => {
    return (
        <>
            <Typography variant="h2" sx={{ margin: 5 }}>About the artist</Typography>
            
            <div sx={{  }}>
                <img src='https://picsum.photos/300/400' alt="alex working on a table" />
                <Typography variant="subtitle1" sx={{ margin: 5 }}>Lorem ipsum etc...</Typography>
            </div>
            
        </>
    )
}

export default About
