import React, { useState } from "react";
import Tile from "./Tile";
import "./puzzle.scss";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants";
import { canSwap , swap, shuffle} from "./helpers";

function Board() {

     // Create an array of string
     var stringArray = localStorage.getItem("tiles") && localStorage.getItem("tiles").split(",")
     console.log(stringArray)
  
     let savedTiles = [];
      
     if(stringArray){
        for (var i = 0; i < 16; i++)
        savedTiles.push(parseInt(stringArray[i]));
     }


    const [ tiles, setTiles] = useState( savedTiles.legth ? savedTiles : shuffle([...Array(TILE_COUNT).keys()]));
    // const [ isSolved, setSolved ] = useState(false);
    // const [ isStarted, setIsStarted ] = useState(false);


    // shuffle ...
    const shuffleTiles = () => {
        const shuffledTiles = shuffle(tiles);
        setTiles(shuffledTiles);
        localStorage.setItem("tiles", shuffledTiles)
    }


        

    //swap ...
    const swapTiles = (tileIndex) =>{
        if(canSwap(tileIndex, tiles.indexOf(tiles.length - 1), GRID_SIZE)){
            const swappedTiles = swap(tiles, tileIndex, tiles.indexOf(tiles.length - 1));
            setTiles(swappedTiles);
            localStorage.setItem("tiles", swappedTiles)
        }
    }

    const handleClick = (index) => {
      swapTiles(index)
    }

    const handleShuffleClick = () => {
        shuffleTiles()
    }


    // const handleStartClick = () => {
    //     shuffleTiles();
    //     setIsStarted(true);
    // }
 
    const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
    const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);

    const style = {
        width : BOARD_SIZE,
        height: BOARD_SIZE,
    };
  return(
      <>
      <h1>Puzzle challenge </h1> <h5>level 1</h5>
      <div className='new_game_button'> 
         <p onClick={ () => handleShuffleClick() }> New game </p> 
         {/* <p onClick={ () => handleStartClick()}>start</p>   */}
         {/* <p> switch to flip game </p> */}
      </div>
      <ul style={style} className="board">
          {tiles.map((tile, index) => (
              <Tile
                 key={tile}
                 index={index}
                 tile={tile}
                 width={pieceWidth}
                 height={pieceHeight}
                 handleClick = {handleClick}
              />
          ))}
      </ul>
      </>
  )
}

export default Board;