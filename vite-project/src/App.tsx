import { useState } from 'react'
import Tile from './components/Tile'
import './App.scss';
import './App.css';
import PopupForm from './components/PopupForm';

function App() {
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
          <div className="flex gap-2 flex-wrap">
          {renderTiles()}
        </div>

        <PopupForm tileList={tileList} setTileList={setTileList} />
    </>
  )
}

export default App
