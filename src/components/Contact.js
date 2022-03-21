import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send';
import ButtonAppBar from './ButtonAppBar';


const Contact = () => {
    return (
        <>
            <ButtonAppBar />
            <Box  sx={{ display: "flex", justifyContent: "center" }}>
                <Box sx={{ border: "3px solid white", borderRadius: 3, width: "50vh", marginTop: 20, paddingBottom: 10 }}>
                    <Typography variant="h2" sx={{ marginTop: 5 }}>Contact Me</Typography>
                    <Typography variant="subtitle1" sx={{ margin: 2 }}>
                        Please contact me with any questions or requests!
                    </Typography>
                    <form>
                        <div>
                            <TextField id="outlined-basic" label="Name" required />
                            <TextField id="outlined-basic" label="Email address" required  />
                        </div>
                        <TextField
                            id="outlined-textarea"
                            label="Multiline Placeholder"
                            placeholder="Placeholder"
                            multiline
                            rows={6}
                            sx={{ width: '30rem' }}
                        />
                        <div>
                            <Button variant="contained" sx={{ width: '30rem' }} endIcon={<SendIcon />}>
                                Send
                            </Button>
                        </div>
                    
                    </form>
                </Box>
            </Box>


        </>
    )
}

export default Contact
