import logo from './logo.svg';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar';
import Typography from '@mui/material/Typography';
import StandardImageList from './components/StandardImageList';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Typography variant="h2" sx={{ margin: 5 }}>Signature Collection</Typography>
      <Typography variant="subtitle1" sx={{ margin: 5 }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolores est quas soluta officiis provident beatae sapiente at mollitia eveniet, maxime facilis quod officia sunt aliquid dolorem eius iste asperiores.
      </Typography>
      <StandardImageList />
    </div>
  );
}

export default App;
// <CustomImageList />