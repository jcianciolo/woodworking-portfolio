import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const About = () => {
    const aboutMe = "In 2014 I graduated from UC Berkeley with a BA in architecture and a nagging desire to explore form and space with something I could touch and understand with my hands. After graduating I worked in fabrication shops and used my skills to draft and 3d render for furniture companies. As I gained practical knowledge from my career I decided to focus more of my time on designing and building for myself in my studio I had assembled through the years. Since then, I've been voraciously learning everything I can about the process of an artist and craftsman." +
    "Everything I create comes as a translation of an idea I'm intensely interested in exploring. But this always requires an attempt to put a raw idea from a sketch book into something that can take physical form and responds to the properties of the living material. And this physical form of course requires that the wood be treated with respect and without an attempt to obscure its beauty and constantly moving dynamic nature. It also must respond to the individual's spatial needs and appeal to his or her sense of touch and aesthetics. In this way my pieces are experiments in allowing wood to be what it essentially is and wants to be (the pure interior of a tree) while still leaving the mark of its assembler." +
    "A tree has a story to tell. Ideally a piece of furniture can provoke and create an understanding of nature from within the home. Trees have wisdom in their form, their color, their texture, and their resilience. My aim is to highlight what makes a specific tree special so that a human can interact with and grow to understand its full beauty."
    return (
        <>
            <Typography variant="h2" sx={{ margin: 5 }}>About the artist</Typography>
            
            <Grid container sx={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Grid item xs={12} sm={8} md={5} >
                    <img src='https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1621033170274-7Z7URX4RP4ME63TJ8X1X/IMG_1790.jpg?format=300w' style={{borderRadius: '1rem'}} alt="alex working on a table" />
                    <Typography variant="body1">test image text</Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={5} >
                    <Typography variant="body2" sx={{ margin: 0 }}>{aboutMe}</Typography>
                </Grid>
            </Grid>
            
        </>
    )
}

export default About
