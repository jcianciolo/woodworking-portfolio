import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [gallery, setGallery] = useState(true)
  const [aboutMe, setAboutMe] = useState(false)
  const [contact, setContact] = useState(false)
  
  return (
    <Router>
      <div className="App">
      <ButtonAppBar />


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/gallery">
            <Gallery itemData={itemData}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

const itemData = [
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821405037-8AXQOO3XSOXTRME1O4Y4/IMG_1696.jpg',
    title: 'Walnut And Brass Pin Coffee Table',
    author: '@bkristastucchio',
    featured: true,
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821405037-8AXQOO3XSOXTRME1O4Y4/IMG_1696.jpg?format=500w',
      'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821412746-G16DDLV1WUAHNSF5CYM3/IMG_1702.jpg?format=500w',
      'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821433977-RWN6GHPB6PCH3PUVHZ30/IMG_1701.jpg?format=500w',
      'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821440607-C0GCCKIWAUXDZK3ZGDWZ/IMG_1695.jpg?format=500w',
      'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821446689-I0DNOZRU66X9CBEU5VZF/IMG_1693.jpg?format=500w'
    ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619822222183-VAUV4YXU5KDHS0TPO28M/F76285CC-E505-4B74-8EB2-99EFFA6CB0F5.jpg',
    title: 'Monterey Cypress Coffee Table',
    author: '@rollelflex_graphy726',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821405037-8AXQOO3XSOXTRME1O4Y4/IMG_1696.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821412746-G16DDLV1WUAHNSF5CYM3/IMG_1702.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821433977-RWN6GHPB6PCH3PUVHZ30/IMG_1701.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821440607-C0GCCKIWAUXDZK3ZGDWZ/IMG_1695.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821446689-I0DNOZRU66X9CBEU5VZF/IMG_1693.jpg?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821649492-WIC49ANVD4DGME5H927P/113D4DD4-842A-4B7F-99B6-A63791F0EF55.JPG',
    title: 'Redwood Burl With Welded Steel Base Side Table',
    author: '@helloimnik',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821405037-8AXQOO3XSOXTRME1O4Y4/IMG_1696.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821412746-G16DDLV1WUAHNSF5CYM3/IMG_1702.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821433977-RWN6GHPB6PCH3PUVHZ30/IMG_1701.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821440607-C0GCCKIWAUXDZK3ZGDWZ/IMG_1695.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821446689-I0DNOZRU66X9CBEU5VZF/IMG_1693.jpg?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1502746873070-K8K1H7E3L3KR0YQYKN3Y/IMG_5984%2Bfixed+fixed.jpg',
    title: 'Nakashima Style Slab Coffee Table',
    author: '@nolanissac',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821405037-8AXQOO3XSOXTRME1O4Y4/IMG_1696.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821412746-G16DDLV1WUAHNSF5CYM3/IMG_1702.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821433977-RWN6GHPB6PCH3PUVHZ30/IMG_1701.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821440607-C0GCCKIWAUXDZK3ZGDWZ/IMG_1695.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821446689-I0DNOZRU66X9CBEU5VZF/IMG_1693.jpg?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1436313480707-RCLQWLTRDYBQ6BWO04U0/small+dude.png',
    title: 'Box 1: Sideboard',
    author: '@hjrc33',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821405037-8AXQOO3XSOXTRME1O4Y4/IMG_1696.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821412746-G16DDLV1WUAHNSF5CYM3/IMG_1702.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821433977-RWN6GHPB6PCH3PUVHZ30/IMG_1701.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821440607-C0GCCKIWAUXDZK3ZGDWZ/IMG_1695.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821446689-I0DNOZRU66X9CBEU5VZF/IMG_1693.jpg?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1436310968705-X6O18VN8LWJI6NTZRV2A/IMG_5268.JPG',
    title: 'Box 2: Nightstand',
    author: '@arwinneil',
    featured: true,
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821405037-8AXQOO3XSOXTRME1O4Y4/IMG_1696.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821412746-G16DDLV1WUAHNSF5CYM3/IMG_1702.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821433977-RWN6GHPB6PCH3PUVHZ30/IMG_1701.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821440607-C0GCCKIWAUXDZK3ZGDWZ/IMG_1695.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821446689-I0DNOZRU66X9CBEU5VZF/IMG_1693.jpg?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492820662046-BDEWNE80THB1LDTZJYVU/IMG_6041.JPG',
    title: 'Lunar Module Coffee Table',
    author: '@tjdragotta',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821405037-8AXQOO3XSOXTRME1O4Y4/IMG_1696.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821412746-G16DDLV1WUAHNSF5CYM3/IMG_1702.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821433977-RWN6GHPB6PCH3PUVHZ30/IMG_1701.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821440607-C0GCCKIWAUXDZK3ZGDWZ/IMG_1695.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821446689-I0DNOZRU66X9CBEU5VZF/IMG_1693.jpg?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492817299293-SEJ8UK24XA277N254K4P/IMG_5995.JPG',
    title: 'Lunar Module 2 Coffee Table',
    author: '@katie_wasserman',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821405037-8AXQOO3XSOXTRME1O4Y4/IMG_1696.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821412746-G16DDLV1WUAHNSF5CYM3/IMG_1702.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821433977-RWN6GHPB6PCH3PUVHZ30/IMG_1701.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821440607-C0GCCKIWAUXDZK3ZGDWZ/IMG_1695.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821446689-I0DNOZRU66X9CBEU5VZF/IMG_1693.jpg?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1494991167380-IVYVO1EVIJFXIOA0V5HU/fixed+table+char.jpg',
    title: 'Charonis Coffee Table',
    author: '@silverdalex',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821405037-8AXQOO3XSOXTRME1O4Y4/IMG_1696.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821412746-G16DDLV1WUAHNSF5CYM3/IMG_1702.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821433977-RWN6GHPB6PCH3PUVHZ30/IMG_1701.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821440607-C0GCCKIWAUXDZK3ZGDWZ/IMG_1695.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821446689-I0DNOZRU66X9CBEU5VZF/IMG_1693.jpg?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492815982180-Z9L923NGBCPLUA17G6GS/IMG_5987.JPG',
    title: 'Two Tone Coffee Table',
    author: '@shelleypauls',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821405037-8AXQOO3XSOXTRME1O4Y4/IMG_1696.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821412746-G16DDLV1WUAHNSF5CYM3/IMG_1702.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821433977-RWN6GHPB6PCH3PUVHZ30/IMG_1701.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821440607-C0GCCKIWAUXDZK3ZGDWZ/IMG_1695.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821446689-I0DNOZRU66X9CBEU5VZF/IMG_1693.jpg?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492819652864-TTW6QLWKJ5FLONE2EN4T/IMG_6033.JPG',
    title: 'Plaster Cast Hands',
    author: '@peterlaster',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821405037-8AXQOO3XSOXTRME1O4Y4/IMG_1696.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821412746-G16DDLV1WUAHNSF5CYM3/IMG_1702.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821433977-RWN6GHPB6PCH3PUVHZ30/IMG_1701.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821440607-C0GCCKIWAUXDZK3ZGDWZ/IMG_1695.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821446689-I0DNOZRU66X9CBEU5VZF/IMG_1693.jpg?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492818694646-624AQMYC35AR652K0V67/IMG_6028.JPG',
    title: 'Meditation Table',
    author: '@southside_customs',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821405037-8AXQOO3XSOXTRME1O4Y4/IMG_1696.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821412746-G16DDLV1WUAHNSF5CYM3/IMG_1702.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821433977-RWN6GHPB6PCH3PUVHZ30/IMG_1701.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821440607-C0GCCKIWAUXDZK3ZGDWZ/IMG_1695.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821446689-I0DNOZRU66X9CBEU5VZF/IMG_1693.jpg?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1436311038748-SNC424R8V82P75CF2I7P/FullSizeRender%285%29.jpg',
    title: 'Ferocious Deity Mask',
    author: '@southside_customs',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821405037-8AXQOO3XSOXTRME1O4Y4/IMG_1696.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821412746-G16DDLV1WUAHNSF5CYM3/IMG_1702.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821433977-RWN6GHPB6PCH3PUVHZ30/IMG_1701.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821440607-C0GCCKIWAUXDZK3ZGDWZ/IMG_1695.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821446689-I0DNOZRU66X9CBEU5VZF/IMG_1693.jpg?format=500w'
  ]
  }
];

// <CustomImageList />
//      

// function App() {


//   return (
//     <div className="App">
//       <ButtonAppBar
//         gallery={gallery}
//         setGallery={setGallery}
//         aboutMe={aboutMe}
//         setAboutMe={setAboutMe}
//         contact={contact}
//         setContact={setContact}
//       />
//       {gallery && <Gallery />}

//       {aboutMe && <About />}
//       {contact && <Contact />}

//     </div>
//   );
// }
