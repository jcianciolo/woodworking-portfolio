import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Item from './Item'
import { useState } from 'react'
import ButtonAppBar from './ButtonAppBar';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


export default function Gallery({itemData, processImages}) {
  let { path, url } = useRouteMatch();

  return (
    <>
      <ButtonAppBar />
        
        <Switch>
          <Route path={`${path}/:itemId`}>
            <Item itemData={itemData} />
          </Route>
          <Route exact path={path}>
          <Box className="gallery-border" sx={{  backgroundColor: 'black', padding: '40px' }}>
          
            <Box className="gallery-intro" sx={{ display: 'flex',  flexDirection: 'column', padding: '100px', justifyContent: 'center', alignItems: 'center', color: 'white', border: '4px solid white', borderRadius: '16px' }}>
              <Typography variant="h2" sx={{ marginBottom: 2 }}>Signature Collection</Typography>
              <Typography variant="body1" sx={{ maxWidth: '75vh'  }} gutterBottom >
              These beautiful works of art are carefully crafted with passion and precision. High-quality materials are selected by hand to create truly unique and beautiful tables.
              </Typography>
              <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
                  <Button variant="outlined" color="inherit">See the process</Button>
                  <Button variant="outlined" color="inherit">Request an order</Button>
              </Stack>
            </Box>
          </Box>
            
         
          <Box sx={{ backgroundColor: '#151516', padding: '30px 0px' }} >

          <ImageList variant="masonry" className="image-list" cols={3} gap={10}>
          {itemData && itemData.map((item, index) => (
              <Card id={index} sx={{ backgroundColor: '#151516' }}>
                <CardActionArea>
                  <Link to={`${url}/${index}`}> 
                    <CardMedia>
                    <ImageListItem key={item.title}>
                        <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.author}
                        loading="lazy"
                        />
                        <ImageListItemBar
                        title={item.title}
                        position="bottom"
                        sx={{
                          background:
                            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                          height: '60px'
                        }}
                        />
                    </ImageListItem>
                    </CardMedia>
                  </Link>
                </CardActionArea>
              </Card>
  
          ))}
          </ImageList>
          </Box>

          <Box className="gallery-border" sx={{  backgroundColor: 'black', padding: '40px' }}>
          
            <Box className="gallery-intro" sx={{ display: 'flex',  flexDirection: 'column', padding: '100px', justifyContent: 'center', alignItems: 'center', color: 'white', border: '4px solid white', borderRadius: '16px' }}>
              <Typography variant="h2" sx={{ marginBottom: 2 }}>Design and Construction</Typography>
              <Typography variant="body1" sx={{ maxWidth: '75vh'  }} gutterBottom >
              These beautiful works of art are carefully crafted with passion and precision. High-quality materials are selected by hand to create truly unique and beautiful tables.
              </Typography>
              <Stack sx={{ pt: 4 }} spacing={2} justifyContent="center">
                <Button variant="contained">See the process</Button>
                  <Button variant="outlined">Request an order</Button>
              </Stack>
            </Box>
          </Box>

          <Box sx={{ backgroundColor: '#151516', padding: '30px 0px', height: '50vh', overflowY: 'scroll' }} >

          <ImageList variant="masonry" className="image-list" cols={4} gap={10}>
          {processImages && processImages.map((item, index) => (
              <Card sx={{ backgroundColor: '#151516' }}>
                <CardActionArea>
                    <CardMedia>
                    <ImageListItem key={index} >
                        <img
                        className='process-image'
                        src={`${item}?w=248&fit=crop&auto=format`}
                        srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.author}
                        loading="lazy"
                        />

                    </ImageListItem>
                    </CardMedia>
                </CardActionArea>
              </Card>
  
          ))}
          </ImageList>
          </Box>
          
  
          </Route>
        </Switch>


    </>
  );
}
