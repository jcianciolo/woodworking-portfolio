import React from 'react'
import { useParams } from 'react-router'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const Item = ({ itemData }) => {
    let { itemId } = useParams();
    const item = itemData[itemId];
    const itemDescription = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda illo, dolore reiciendis ratione autem, amet facere architecto quos nisi ducimus maxime esse minus placeat provident repellendus culpa odit velit doloribus?'
    
    return (
        <>
            <Typography variant="h2" sx={{ margin: 5 }}>{item.title}</Typography>

            <Grid container sx={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                <Grid item xs={12} sm={8} md={5} >
                <Box sx={{ height: 600, overflowY: 'scroll' }}>
                    <ImageList variant="masonry" >
                        {item.secondaryImages.map((image) => (
                            <Card>
                                <CardActionArea>
                                    <CardMedia>
                                        <ImageListItem key={image}>
                                            <img
                                                src={`${image}?w=248&fit=crop&auto=format`}
                                                srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                alt={'cool altern'}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    </CardMedia>
                                </CardActionArea>
                            </Card>
                        ))}
                    </ImageList>
                </Box>
                </Grid>
                <Grid item xs={12} sm={8} md={5} >
                    <Typography variant="h3" sx={{ margin: 5 }}>{ itemDescription }</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Item
