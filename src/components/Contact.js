import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send';
import ButtonAppBar from './ButtonAppBar';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';


const Contact = () => {
    return (
        <>
            <ButtonAppBar />

                <Box sx={{  minHeight: '95vh', display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center', backgroundColor: '#151516', color: 'white' }}>
                    <Box sx={{ justifyContent: "center", maxWidth: "50vh", maxHeight: '50vh', border: "2px solid white",  borderRadius: "10px", padding: '30px', backgroundColor: '#333' }}>
                        <Typography variant="h2">Contact Me</Typography>
                        <Typography variant="subtitle1" sx={{ margin: 2 }}>
                            Please contact me with any questions or requests!
                        </Typography>
                        <form>
                            <div>
                                <TextField label="Name" required/>
                                <TextField variant="standard" label="Email address" required  />
                            </div>

                            <div>
                                <Button variant="text" sx={{ color: 'white' }} endIcon={< endIcon />}>
                                    Send
                                </Button>
                            </div>
                        
                        </form>
                    </Box>
                    <Typography variant="p" sx={{ color: 'white' }}>© 2022 Alex Kochman, John Cianciolo</Typography>
                </Box>





        </>
    )
}

export default Contact
