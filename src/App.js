import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import Typography from '@mui/material/Typography';
import StandardImageList from './components/StandardImageList';
import About from './components/About';
import { useState } from 'react'

function App() {
  const [gallery, setGallery] = useState(true)
  const [aboutMe, setAboutMe] = useState(false)
  const [contact, setContact] = useState(false)

  return (
    <div className="App">
      <ButtonAppBar
        gallery={gallery}
        setGallery={setGallery}
        aboutMe={aboutMe}
        setAboutMe={setAboutMe}
        contact={contact}
        setContact={setContact}
      />
      {gallery && <div>
        <Typography variant="h2" sx={{ margin: 5 }}>Signature Collection</Typography>
        <Typography variant="subtitle1" sx={{ margin: 5 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolores est quas soluta officiis provident beatae sapiente at mollitia eveniet, maxime facilis quod officia sunt aliquid dolorem eius iste asperiores.
        </Typography>
        <StandardImageList />
      </div>}

      {aboutMe && <About />}

    </div>
  );
}

export default App;
// <CustomImageList />
//      