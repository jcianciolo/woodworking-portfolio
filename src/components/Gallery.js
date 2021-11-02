import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Item from './Item'
import { useState } from 'react'
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
        
        <Switch>
          <Route path={`${path}/:itemId`}>
            <Item itemData={itemData} />
          </Route>
          <Route exact path={path}>
          <Typography variant="h2" sx={{ margin: 5 }}>Signature Collection</Typography>
          <Typography variant="body1" sx={{ marginLeft: 45, marginRight: 45 }} gutterBottom >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolores est quas soluta officiis provident beatae sapiente at mollitia eveniet, maxime facilis quod officia sunt aliquid dolorem eius iste asperiores.
          </Typography>
          <Stack sx={{ pt: 4, marginBottom: 5 }} direction="row" spacing={2} justifyContent="center">
              <Button variant="contained">See the process</Button>
              <Button variant="outlined">Request an order</Button>
          </Stack>
          <ImageList variant="masonry" className="image-list" cols={3} gap={6}>
          {itemData && itemData.map((item, index) => (
              <Card id={index}>
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
                      subtitle={<span>by: {item.author}</span>}
                      position="bottom"
                      />
                  </ImageListItem>
                  </CardMedia>
                </Link>
              </CardActionArea>
              </Card>
  
          ))}
          </ImageList>
  
          </Route>
      </Switch>
    </>
  );
}
