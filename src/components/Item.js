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
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ParkIcon from '@mui/icons-material/Park';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SquareFootIcon from '@mui/icons-material/SquareFoot';

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
                <Grid item xs={12} sm={8} md={5}>
                    <Card raised>
                        <Typography variant="h4" sx={{ margin: 5 }}>{ itemDescription }</Typography>
                        <nav aria-label="main mailbox folders">
                            <Divider />
                                <List sx={{ justifyContent: 'center' }}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                        <ListItemIcon>
                                            <SquareFootIcon fontSize="large" />
                                        </ListItemIcon>
                                        <ListItemText primary={`${item.size}, ${item.weight}`} />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                        <ListItemIcon>
                                            <ParkIcon fontSize="large" />
                                        </ListItemIcon>
                                        <ListItemText primary={item.materials} />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                        <ListItemIcon>
                                            <LocalOfferIcon fontSize="large"/>
                                        </ListItemIcon>
                                        <ListItemText primary={`$ ${item.price}`} />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                        </nav>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Item
