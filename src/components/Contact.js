import React from 'react'
import Typography from '@mui/material/Typography'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import TextField from '@mui/material/TextField'

const Contact = () => {
    return (
        <>
            <Typography variant="h2" sx={{ margin: 2 }}>Contact Me</Typography>
            <Typography variant="subtitle1" sx={{ margin: 2 }}>
                Please contact me with any questions or requests!
            </Typography>
            <div>
                <TextField id="outlined-basic" label="Name" />
                <TextField id="outlined-basic" label="Email address" />
            </div>
            <TextField
                id="outlined-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                rows={6}
                sx={{ width: '30rem' }}
            />

        </>
    )
}

export default Contact
