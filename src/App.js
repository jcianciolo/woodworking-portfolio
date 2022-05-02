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
  return (
    <Router>
      <div className="App">
      
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
            <Gallery itemData={itemData} processImages={processImages}/>
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
    size: '24 inches by 36 inches',
    weight: '100lb',
    price: '1,750.00',
    description: 'Lorem ipsum etc...',
    materials: 'Walnut, Monterey Cypress',
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
    size: '24 inches by 36 inches',
    weight: '100lb',
    price: '1,750.00',
    description: 'Lorem ipsum etc...',
    materials: 'Walnut, Monterey Cypress',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619822222183-VAUV4YXU5KDHS0TPO28M/F76285CC-E505-4B74-8EB2-99EFFA6CB0F5.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619822222424-0Q343JYI54YX6KNRIIMG/84CB0B9A-6907-4ABF-B0DB-06FB7F406730.jpg?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821649492-WIC49ANVD4DGME5H927P/113D4DD4-842A-4B7F-99B6-A63791F0EF55.JPG',
    title: 'Redwood Burl With Welded Steel Base Side Table',
    author: '@helloimnik',
    size: '24 inches by 36 inches',
    weight: '100lb',
    price: '1,750.00',
    description: 'Lorem ipsum etc...',
    materials: 'Walnut, Monterey Cypress',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821649492-WIC49ANVD4DGME5H927P/113D4DD4-842A-4B7F-99B6-A63791F0EF55.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821647654-C3J1N161LLHPDLDA97X1/1E1047B7-8262-433F-A13E-13D9D01C4C54.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1619821644199-TMDYE7YQYXAATQJVUNU2/17B4F025-4CB9-47C4-84C5-158B899C3BCB.jpg?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1502746873070-K8K1H7E3L3KR0YQYKN3Y/IMG_5984%2Bfixed+fixed.jpg',
    title: 'Nakashima Style Slab Coffee Table',
    author: '@nolanissac',
    size: '24 inches by 36 inches',
    weight: '100lb',
    price: '1,750.00',
    description: 'Lorem ipsum etc...',
    materials: 'Walnut, Monterey Cypress',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1502746873070-K8K1H7E3L3KR0YQYKN3Y/IMG_5984%2Bfixed+fixed.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492815465107-8VU12UIUZVTBF7FZ4JIJ/IMG_5975.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1502747484792-LBZ3RYG0FVIKRR78DQME/IMG_5982+fixed.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492815477975-N7KV9I0G9Z69VZN27B9J/IMG_5977.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1502747350207-THUZSTB2FSOCPXPVI7XR/IMG_5981%2Bfixed+fixed.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492815457729-67A9ZUIKZ1MQ9E39FGE8/IMG_5979.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492815483141-PITZ7VUY7WX5A2DESIPF/IMG_5978.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492815453704-TQ4BH8OGWDJ9U5YOPCZ2/IMG_5980.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492815471225-Q8RTS79AQH2MPY9ROMJG/IMG_5976.JPG?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1436313480707-RCLQWLTRDYBQ6BWO04U0/small+dude.png',
    title: 'Box 1: Sideboard',
    author: '@hjrc33',
    size: '24 inches by 36 inches',
    weight: '100lb',
    price: '1,750.00',
    description: 'Lorem ipsum etc...',
    materials: 'Walnut, Monterey Cypress',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492817890354-P61D27EIFPY26KYMGA4L/IMG_6015.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492817889834-E6TL5E613I3G1XZOHC4J/IMG_6013.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492817889904-G9ZSTC5MXQREZND728DF/IMG_6014.JPG?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1436310968705-X6O18VN8LWJI6NTZRV2A/IMG_5268.JPG',
    title: 'Box 2: Nightstand',
    author: '@arwinneil',
    featured: true,
    size: '24 inches by 36 inches',
    weight: '100lb',
    price: '1,750.00',
    description: 'Lorem ipsum etc...',
    materials: 'Walnut, Monterey Cypress',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492818447656-3M620L7N73HMBGE4ZPVV/IMG_6021.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492818447847-YSJAGYP9WCWJOIYOFH3Q/IMG_6019.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492818449995-M9J3OGE15FNUCZU5GW28/IMG_6020.JPG?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492820662046-BDEWNE80THB1LDTZJYVU/IMG_6041.JPG',
    title: 'Lunar Module Coffee Table',
    author: '@tjdragotta',
    size: '24 inches by 36 inches',
    weight: '100lb',
    price: '1,750.00',
    description: 'Lorem ipsum etc...',
    materials: 'Walnut, Monterey Cypress',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492820662046-BDEWNE80THB1LDTZJYVU/IMG_6041.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492820668178-AS2TYKT83O6V854P8ESI/IMG_6042.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492812972304-3NB2568S0SCVC79AMUP9/IMG_5986.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492812969193-GWVURL87DUMRTD3IE106/IMG_5985.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492820664997-CO2P6LNWNM0I6RCTW9GM/IMG_6040.JPG?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492817299293-SEJ8UK24XA277N254K4P/IMG_5995.JPG',
    title: 'Lunar Module 2 Coffee Table',
    author: '@katie_wasserman',
    size: '24 inches by 36 inches',
    weight: '100lb',
    price: '1,750.00',
    description: 'Lorem ipsum etc...',
    materials: 'Walnut, Monterey Cypress',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492817299293-SEJ8UK24XA277N254K4P/IMG_5995.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492817299928-LJ56QN1PAHB3PV8S25MQ/IMG_5994.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1464136564239-MVJDKLZHAUF1VEV52HHX/image.jpeg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492817294306-Q6LNJV8AL5E995VZFK5T/IMG_5993.JPG?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1494991167380-IVYVO1EVIJFXIOA0V5HU/fixed+table+char.jpg',
    title: 'Charonis Coffee Table',
    author: '@silverdalex',
    size: '24 inches by 36 inches',
    weight: '100lb',
    price: '1,750.00',
    description: 'Lorem ipsum etc...',
    materials: 'Walnut, Monterey Cypress',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1494991167380-IVYVO1EVIJFXIOA0V5HU/fixed+table+char.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492817115943-PBRMFI4FDDOHA896IQAG/IMG_6002.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492817116581-QEELAJOXGW9YQCJK8OBR/IMG_5999.JPG?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492815982180-Z9L923NGBCPLUA17G6GS/IMG_5987.JPG',
    title: 'Two Tone Coffee Table',
    author: '@shelleypauls',
    size: '24 inches by 36 inches',
    weight: '100lb',
    price: '1,750.00',
    description: 'Lorem ipsum etc...',
    materials: 'Walnut, Monterey Cypress',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492815982180-Z9L923NGBCPLUA17G6GS/IMG_5987.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492817855660-PZP5VTROZTS662JBJEPP/IMG_6009.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492815977667-V2Z0DQI500ALS4WPM5CH/IMG_5988.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492815986812-9RXSJ2C6FVWT3WV9186Y/IMG_5989.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492815990574-Y5PVCM8TX9WNP41WGPS7/IMG_5990.JPG?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492819652864-TTW6QLWKJ5FLONE2EN4T/IMG_6033.JPG',
    title: 'Plaster Cast Hands',
    author: '@peterlaster',
    size: '24 inches by 36 inches',
    weight: '100lb',
    price: '1,750.00',
    description: 'Lorem ipsum etc...',
    materials: 'Walnut, Monterey Cypress',
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
    size: '24 inches by 36 inches',
    weight: '100lb',
    price: '1,750.00',
    description: 'Lorem ipsum etc...',
    materials: 'Walnut, Monterey Cypress',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492818694646-624AQMYC35AR652K0V67/IMG_6028.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492818694122-UZXWZVZ678XWU5H1Q5WR/IMG_6026.JPG?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492818694203-1TFU2GVNEWJWHZLVJOAA/IMG_6027.JPG?format=500w'
  ]
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1436311038748-SNC424R8V82P75CF2I7P/FullSizeRender%285%29.jpg',
    title: 'Ferocious Deity Mask',
    author: '@southside_customs',
    size: '24 inches by 36 inches',
    weight: '100lb',
    price: '1,750.00',
    description: 'Lorem ipsum etc...',
    materials: 'Walnut, Monterey Cypress',
    secondaryImages: ['https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1436311038748-SNC424R8V82P75CF2I7P/FullSizeRender%285%29.jpg?format=500w',
    'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1436311026058-48RWO8SIOE1AHC7BBO2S/FullSizeRender%284%29.jpg?format=500w'
  ]
  }
];

const processImages = [
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1621037808034-87IZSR4MGNSSTQXA2Z27/IMG_1707.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1621037731017-TTBLZEWZOHURSTPOVIC7/5E3A8A31-0F02-4E61-A31B-91B95A844A73.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1621039313009-LM42KTFSYFEPUQPWL82M/6.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1621039313411-6XN9HQRARO46BC1BDL6D/7.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1621037746155-N19JB04TPMGWOJJVWKP1/FA282C25-F218-47E9-96EB-7E990D4B4589.JPG?format=500w',
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492819596295-VUEYM8MUS4KH8J17FR23/IMG_6029.JPG?format=500w',
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1621037731207-YO6MQ4ZFWAN2JPP55VQH/06FA1E6D-4604-4D52-B368-EF39D9E0A52A.JPG?format=500w',
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1440476534275-38728P6G5SUY64TX68CK/IMG_6821.JPG?format=500w',
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1621039311512-S1BB5I6EMCRNUCXX4JJF/4.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1621037737211-9VQ4YEOTT5AS6EF6UQFJ/08935DF0-59A0-4A3A-8EF4-394BF141B025.JPG?format=500w',
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492819604973-P254BRM3VPZRTUO6NRHU/IMG_6032.JPG?format=500w',
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1621039309956-KJBOF3XQPXHK73KQBHW6/3.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492819604141-VIFLSMZF5O9VKUPDGYZK/IMG_6031.JPG?format=500w',
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1492819600203-OQSFS0JNR4DCQ5A4NRVM/IMG_6030.JPG?format=500w',
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1621037737204-BSNLAHX5EO7EBM56BUZ1/246D5CF6-3C94-4C3C-9F73-A86183334576.JPG?format=500w',
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1621039308534-HIATQ8PTBWYGGOA26UPC/2.jpg?format=500w',
  'https://images.squarespace-cdn.com/content/v1/559c3ccce4b0cebfa4ebbf72/1463975750441-8MWUSJ525UZKFMWJ8LIJ/Charonis+Coffee+Table1.jpg?format=500w'
]