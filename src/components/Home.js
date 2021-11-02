import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const Home = () => {
    const home = 'Hello, this is the home page.'
    return (
        <>
            <Typography variant="h2" sx={{ margin: 5 }}>About the artist</Typography>
            
            <Grid container sx={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Grid item xs={12} sm={8} md={5} >
                    <img src='https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1621033170274-7Z7URX4RP4ME63TJ8X1X/IMG_1790.jpg?format=300w' style={{borderRadius: '1rem'}} alt="alex working on a table" />
                    <Typography variant="body1">test image text</Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={5} >
                    <Typography variant="body2" sx={{ margin: 0 }}>{home}</Typography>
                </Grid>
            </Grid>
            
        </>
    )
}

export default Home
