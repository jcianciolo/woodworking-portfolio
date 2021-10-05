import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import { useState } from 'react';

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
      {gallery && <Gallery />}

      {aboutMe && <About />}
      {contact && <Contact />}

    </div>
  );
}

export default App;
// <CustomImageList />
//      