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

                <Box sx={{  height: '90vh', display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'center', backgroundColor: '#04293A', color: 'white' }}>
                <Box sx={{ justifyContent: "center", width: "50vh", height: '50vh', border: "2px solid white",  borderRadius: "10px", padding: '30px', backgroundColor: '#064663' }}>
                <Typography variant="h2">Contact Me</Typography>
                <Typography variant="subtitle1" sx={{ margin: 2 }}>
                    Please contact me with any questions or requests!
                </Typography>
                        <form>
                            <div>
                                <TextField variant="standard" id="outlined-basic" label="Name" required />
                                <TextField variant="standard" id="outlined-basic" label="Email address" required  />
                            </div>
                            <TextField
                                variant="standard"
                                id="outlined-textarea"
                                label="Multiline Placeholder"
                                placeholder="Placeholder"
                                color='text'
                                multiline
                                rows={6}
                                sx={{ width: '100%' }}
                            />
                            <div>
                                <Button variant="text" sx={{ width: '100%', color: 'white' }} endIcon={<SendIcon />}>
                                    Send
                                </Button>
                            </div>
                        
                        </form>
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

export default Contact
