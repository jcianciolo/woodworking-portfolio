import React from 'react'
import { useParams } from 'react-router'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardContent, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ParkIcon from '@mui/icons-material/Park';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ModalImage from "react-modal-image";


const Item = ({ itemData }) => {
    let { itemId } = useParams();
    const item = itemData[itemId];
    
    return (
        <>


            <Grid container sx={{ height: '90vh', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#064663' }}>
                
                <Grid className="card" item xs={12} sm={8} md={4}>
                    <Card raised sx={{ backgroundColor: '#04293A', color: 'white' }}>


                        <Typography variant="h4" sx={{ margin: 5 }}>{ item.title }</Typography>

                        <Divider variant="middle"/>

                        <List>
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

                    </Card>  
                </Grid>

                <Grid item xs={12} sm={8} md={6}>
                <Box sx={{ height: '70vh', overflowY: 'auto', justifyContent: 'center', alignItems: 'center' }}>
                    <ImageList variant="masonry" gap={5}>
                        {item.secondaryImages.map((image) => (
                            <Card sx={{ backgroundColor: '#064663' }}> 
                                <CardActionArea>
                                    <CardMedia>
                                        <ImageListItem key={image}>
                                            <ModalImage
                                                small={`${image}?w=248&fit=crop&auto=format`}
                                                large={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                alt={item.description}
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
            </Grid>

            <div className="footer">
                <p>© 2022 Alex Kochman, John Cianciolo</p>
            </div>
        </>
    )
}

export default Item
