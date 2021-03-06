import GameBoards from "../Assets/Gameboards";
import { useEffect } from "react";

const consoles = [
  "dreamcast",
  "gamecube",
  "n64",
  "ps1",
  "ps2",
  "ps4",
  "xbox",
  "xbox360",
];

const Home = (props) => {
  useEffect(() => {
    props.setScore(0);
  }, []);
  return (
    <div className="flex flex-wrap items-center justify-center w-screen  py-[6em] sm:gap-4 gap-1  ">
      {GameBoards.map((game, i) => {
        return (
          <div
            key={consoles[i]}
            onClick={() => {
              props.setGame({ console: consoles[i], i });
              props.setCurrentPage("game");
            }}
            className="relative w-1/3 overflow-hidden transition-all sm:w-1/5 rounded-2xl sm:hover:scale-105 "
            style={{
              animationDelay: `${i * 0.05}s`,
              animation: `revealScores ${(i + 1) * 0.2}s ease-in-out`,
            }}
          >
            <img src={game} alt={consoles[i]} draggable="false" />

            <h1 className="absolute text-2xl font-extrabold text-white uppercase -translate-x-1/2 top-4 left-1/2">
              {consoles[i]}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
