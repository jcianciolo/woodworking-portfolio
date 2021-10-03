import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography'
import { useState, useEffect } from 'react';

export default function StandardImageList() {

  return (
    <ImageList variant="masonry" className="image-list" cols={3} gap={6}>
      {itemData && itemData.map((item) => (
        <Card>
          <CardActionArea>
            <CardMedia>
              <ImageListItem key={item.id}>
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
          </CardActionArea>
        </Card>

      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821405037-8AXQOO3XSOXTRME1O4Y4/IMG_1696.jpg',
    title: 'Walnut and brass pin coffee table',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619822222183-VAUV4YXU5KDHS0TPO28M/F76285CC-E505-4B74-8EB2-99EFFA6CB0F5.jpg',
    title: 'Monterey Cypress Coffee Table',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821649492-WIC49ANVD4DGME5H927P/113D4DD4-842A-4B7F-99B6-A63791F0EF55.JPG',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1502746873070-K8K1H7E3L3KR0YQYKN3Y/IMG_5984%2Bfixed+fixed.jpg',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1436313480707-RCLQWLTRDYBQ6BWO04U0/small+dude.png',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1436310968705-X6O18VN8LWJI6NTZRV2A/IMG_5268.JPG',
    title: 'Honey',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492820662046-BDEWNE80THB1LDTZJYVU/IMG_6041.JPG',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492817299293-SEJ8UK24XA277N254K4P/IMG_5995.JPG',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1494991167380-IVYVO1EVIJFXIOA0V5HU/fixed+table+char.jpg',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492815982180-Z9L923NGBCPLUA17G6GS/IMG_5987.JPG',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492819652864-TTW6QLWKJ5FLONE2EN4T/IMG_6033.JPG',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492818694646-624AQMYC35AR652K0V67/IMG_6028.JPG',
    title: 'Bike',
    author: '@southside_customs',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1436311038748-SNC424R8V82P75CF2I7P/FullSizeRender%285%29.jpg',
    title: 'Bike',
    author: '@southside_customs',
  }
];