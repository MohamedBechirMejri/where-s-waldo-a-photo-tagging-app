import GameBoards from "../Assets/Gameboards";
import { useEffect, useState } from "react";
import Table from "./Nav/Scores/Table";
import {
  collection,
  onSnapshot,
  getFirestore,
  orderBy,
  query,
} from "firebase/firestore";

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
const Scores = (props) => {
  const db = getFirestore();

  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    onSnapshot(
      query(collection(db, props.col), orderBy("score")),
      (snapshot) => {
        const games = [];
        snapshot.docs.forEach((doc) => {
          games.push({ ...doc.data() });
          setIsLoading(false);
        });
        setGames(games);
      }
    );
  }, [props.col]);

  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen gap-8 py-20 text-4xl text-center text-white select-none animate-revealScores">
      <h1 className="text-5xl font-extrabold uppercase">
        scores <br /> <span className="text-lg">(less is better)</span>
      </h1>
      <div className="flex gap-2 p-2">
        {GameBoards.map((game, i) => {
          return (
            <div
              key={consoles[i]}
              onClick={() => {
                props.setCol(consoles[i]);
              }}
              className="relative w-1/3 overflow-hidden transition-all sm:w-1/5 rounded-2xl sm:hover:scale-105 "
              style={{
                animationDelay: `${i * 0.05}s`,
                animation: `revealScores ${(i + 1) * 0.2}s ease-in-out`,
              }}
            >
              <img src={game} alt={consoles[i]} draggable="false" />

              <h1 className="absolute text-[.25em] font-extrabold text-white uppercase -translate-x-1/2 lg:text-2xl top-4 left-1/2">
                {consoles[i]}
              </h1>
            </div>
          );
        })}
      </div>
      <Table col={props.col} games={games} isLoading={isLoading} />
    </div>
  );
};

export default Scores;
