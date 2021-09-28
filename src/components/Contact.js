import React from 'react'
import Typography from '@mui/material/Typography'
import TextareaAutosize from '@mui/material/TextareaAutosize'

const Contact = () => {
    return (
        <>
            <Typography variant="h2" sx={{ margin: 5 }}>Contact Me</Typography>
            <Typography variant="subtitle1" sx={{ margin: 5 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolores est quas soluta officiis provident beatae sapiente at mollitia eveniet, maxime facilis quod officia sunt aliquid dolorem eius iste asperiores.
            </Typography>
            <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Empty"
                style={{ width: 200 }}
            />
        </>
    )
}

export default Contact
