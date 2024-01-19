import { useState } from 'react'
import Tile from './components/Tile'
import './App.scss';
import './App.css';
import Button from 'react-bootstrap/Button';
import PopupForm from './components/PopupForm';

function App() {
  const [tileCount, setTileCount] = useState(0);
  const [tileList, setTileList] = useState([]); // array of strings


  const renderTiles = () => {
    const Tiles = [];

    for(let i = 0; i < tileList.length; i++) {
      Tiles.push(<Tile websiteName={tileList[i].websiteName} websiteURL={tileList[i].websiteURL} />)
    }

    return Tiles;
  }

  return (
    <>
        <div style={{ display: 'flex', gap:'10px', flexWrap: 'wrap' }}>
          {renderTiles()}
        </div>

        <PopupForm tileList={tileList} setTileList={setTileList} />
    </>
  )
}

export default App
