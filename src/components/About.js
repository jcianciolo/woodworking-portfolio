import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import ButtonAppBar from './ButtonAppBar';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';


const About = () => {
    const aboutMe = "In 2014 I graduated from UC Berkeley with a BA in architecture and a nagging desire to explore form and space with something I could touch and understand with my hands. After graduating I worked in fabrication shops and used my skills to draft and 3d render for furniture companies. As I gained practical knowledge from my career I decided to focus more of my time on designing and building for myself in my studio I had assembled through the years. Since then, I've been voraciously learning everything I can about the process of an artist and craftsman." +
    "Everything I create comes as a translation of an idea I'm intensely interested in exploring. But this always requires an attempt to put a raw idea from a sketch book into something that can take physical form and responds to the properties of the living material. And this physical form of course requires that the wood be treated with respect and without an attempt to obscure its beauty and constantly moving dynamic nature. It also must respond to the individual's spatial needs and appeal to his or her sense of touch and aesthetics. In this way my pieces are experiments in allowing wood to be what it essentially is and wants to be (the pure interior of a tree) while still leaving the mark of its assembler." +
    "A tree has a story to tell. Ideally a piece of furniture can provoke and create an understanding of nature from within the home. Trees have wisdom in their form, their color, their texture, and their resilience. My aim is to highlight what makes a specific tree special so that a human can interact with and grow to understand its full beauty."

    const shortAboutMe = "Alexander Kochman graduated from U.C. Berkeley with a degree in Architecture. His passion for woodworking has driven him to build tables of exceptional quality and character."
    return (
        <>
            <ButtonAppBar />
            <Box sx={{ backgroundColor: '#04293A', height: '90vh' }}>
            
                <Typography variant="h2" sx={{ padding: 5, color: 'white' }}>About the artist</Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                
                    <Box sx={{ width: '50vw', border: '1px solid white', padding: '50px 0px', backgroundColor: '#064663', color: 'white', borderRadius: '5px' }} >
                    <Grid container spacing={3} sx={{ alignItems: 'center', justifyContent: 'center' }}> 
                        <Grid item xs={6} sm={8} md={5} >
                            <img src='https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1621033170274-7Z7URX4RP4ME63TJ8X1X/IMG_1790.jpg?format=300w' style={{borderRadius: '1rem'}} alt="alex working on a table" />
                        </Grid>
                        <Grid item xs={6} sm={8} md={5}>
                            <Typography variant="h5">{shortAboutMe}</Typography>
                        </Grid>
                    </Grid>
                    </Box>
                </Box>
                
            </Box>

            <div className="footer">
                <div className="socials">
                    <p><InstagramIcon /></p>
                    <p><EmailIcon /></p>
                </div>
                <p>© 2022 Alex Kochman, John Cianciolo</p>
            </div>
            
        </>
    )
}

export default About


// <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                
//                     <Box sx={{  display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '50vw', border: '1px solid white', padding: '50px 0px', backgroundColor: '#064663', color: 'white', borderRadius: '5px' }} >
//                     <img src='https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1621033170274-7Z7URX4RP4ME63TJ8X1X/IMG_1790.jpg?format=300w' style={{borderRadius: '1rem'}} alt="alex working on a table" />
//                     <Typography variant="h5">{shortAboutMe}</Typography>


//                     </Box>
//                 </Box>