import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Gallery />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
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
