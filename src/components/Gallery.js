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


export default function Gallery({itemData}) {
  let { path, url } = useRouteMatch();

  return (
    <>
      <ButtonAppBar />
        
        <Switch>
          <Route path={`${path}/:itemId`}>
            <Item itemData={itemData} />
          </Route>
          <Route exact path={path}>
          <Box sx={{ backgroundColor: '#04293A', padding: '20px 20px', color: 'white' }}>
            <Typography variant="h2" sx={{ marginBottom: 2 }}>Signature Collection</Typography>
            <Typography variant="body1" sx={{ }} gutterBottom >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolores est quas soluta officiis provident beatae sapiente at mollitia eveniet, maxime facilis quod officia sunt aliquid dolorem eius iste asperiores.
            </Typography>
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
                <Button variant="contained">See the process</Button>
                <Button variant="outlined">Request an order</Button>
            </Stack>
          </Box>
         
          <Box sx={{ backgroundColor: '#064663', borderTop: '1px solid #041C32', borderBottom: '1px solid #041C32', padding: '30px 0px' }} >

          <ImageList variant="masonry" className="image-list" cols={3} gap={10}>
          {itemData && itemData.map((item, index) => (
              <Card id={index} sx={{ backgroundColor: '#064663' }}>
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
          
  
          </Route>
      </Switch>

    </>
  );
}
