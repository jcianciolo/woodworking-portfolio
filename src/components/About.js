import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ButtonAppBar from './ButtonAppBar';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import Footer from './Footer';

const About = () => {

    const shortAboutMe = "Alexander Kochman graduated from U.C. Berkeley with a degree in Architecture. His passion for" + 
        "woodworking has driven him to build tables of exceptional quality and character."
    return (
        <>  
        
        
        <ButtonAppBar /> 
        <Box id="about-page" sx={{ height: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center' }}>
                
                <Typography variant="h2" sx={{ color: 'white', mb: 2 }}>About the artist</Typography>
                
            
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '30px', width: '60%', height: '60%', border: '1px solid white', backgroundColor: 'black', color: 'white', borderRadius: '5px' }} >
                        <img className='about-img' src='https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1621033170274-7Z7URX4RP4ME63TJ8X1X/IMG_1790.jpg'  alt="alex working on a table" />
                        <Typography variant="h4" sx={{ maxWidth: '500px', maxHeight: '100%' }}>{shortAboutMe}</Typography>
                </Box>


                
        </Box>
                <Footer />
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


// <div className="socials">
// <p><InstagramIcon /></p>
// <p><EmailIcon /></p>
// <Link className="link" to="/">
//     <Avatar sx={{ width: 24, height: 24 }} alt='ajk' className="footer-avatar" src='https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1436844658707-OQ5WMM3I9X4KBPCFISFF/simple+logo+art+and+wood.jpg' />
// </Link>
// </div>