import React from 'react'
import { useParams } from 'react-router'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

const Item = ({ itemData }) => {
    let { itemId } = useParams();
    const item = itemData[itemId];
    
    return (
        <>
            <Typography variant="h2" sx={{ margin: 5 }}>{item.title}</Typography>
                <ImageList variant="masonry" className="image-list" cols={3} gap={6}>
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
        </>
    )
}

export default Item
