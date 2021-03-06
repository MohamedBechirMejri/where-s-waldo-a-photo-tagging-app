import GameBoards from "../Assets/Gameboards";
import Dropdown from "./GamePage/Dropdown";
import { useEffect, useState } from "react";
import characters from "../Assets/characters";
import GameOver from "./GamePage/GameOver";

const [dreamcast, gamecube, n64, ps1, ps2, ps4, xbox, xbox360] = GameBoards;

const GamePage = (props) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) props.setScore(props.score + 1);
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, [props.score]);

  useEffect(() => {
    props.setChars(characters[props.game.i]);
  }, []);

  return (
    <div className="relative flex items-center justify-center ">
      <img
        draggable="false"
        src={
          props.game.console === "ps1"
            ? ps1
            : props.game.console === "ps2"
            ? ps2
            : props.game.console === "ps4"
            ? ps4
            : props.game.console === "xbox"
            ? xbox
            : props.game.console === "xbox360"
            ? xbox360
            : props.game.console === "gamecube"
            ? gamecube
            : props.game.console === "dreamcast"
            ? dreamcast
            : n64
        }
        alt={props.game.console}
        className="w-full h-full"
        onClick={(e) => {
          e.preventDefault();

          // get image click position
          const x = e.pageX;
          const y = e.pageY;

          // get image size
          const img = e.target;
          const width = img.width;
          const height = img.height;

          // get click position relative to image (for different screens)
          const position = {
            x: ((x / width) * 100).toFixed(2),
            y: ((y / height) * 100).toFixed(2),
          };
          setCurrentPosition(position);
        }}
      />
      {currentPosition && (
        <Dropdown
          currentPosition={currentPosition}
          setCurrentPosition={setCurrentPosition}
          game={props.game}
          chars={props.chars}
          setChars={props.setChars}
          setGameOver={setGameOver}
        />
      )}
      {gameOver && (
        <GameOver
          setCurrentPage={props.setCurrentPage}
          score={props.score}
          setScore={props.setScore}
          console={props.game.console}
          col={props.col}
          setCol={props.setCol}
        />
      )}
    </div>
  );
};

export default GamePage;
