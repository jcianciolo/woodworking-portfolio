import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const About = () => {
    return (
        <>
            <Typography variant="h2" sx={{ margin: 5 }}>About the artist</Typography>
            
            <Grid container sx={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Grid item xs={12} sm={8} md={5} >
                    <img src='https://picsum.photos/400/300' style={{borderRadius: '1rem'}} alt="alex working on a table" />
                </Grid>
                <Grid item xs={12} sm={8} md={5} >
                    <Typography variant="h5" sx={{ margin: 0 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus totam nihil pariatur a possimus fugit maxime aliquid obcaecati aliquam nam minima, ullam magni voluptate explicabo, id accusantium. Nihil, reprehenderit iste!</Typography>
                </Grid>
            </Grid>
            
        </>
    )
}

export default About
