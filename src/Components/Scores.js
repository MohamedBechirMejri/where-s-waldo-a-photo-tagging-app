import GameBoards from "../Assets/Gameboards";
import { useEffect, useState } from "react";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

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
const Scores = () => {
  const db = getFirestore();

  const [col, setCol] = useState("dreamcast");
  const [games, setGames] = useState([]);
  const [colRef, setColRef] = useState(collection(db, col));

  useEffect(() => {
    setColRef(collection(db, col));
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      setGames(snapshot.docs.map((doc) => doc.data()));
    });
    return () => unsubscribe();
  }, [db, col]);

  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen gap-8 py-20 text-4xl text-center text-white select-none animate-revealScores">
      <h1 className="text-5xl font-extrabold uppercase">
        scores <br /> <span className="text-lg">(less is better)</span>
      </h1>
      <div className="flex gap-2">
        {GameBoards.map((game, i) => {
          return (
            <div
              key={consoles[i]}
              onClick={() => {}}
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
      <h1>{col}</h1>
      {/* add table of scores */}
      <div className="flex flex-col items-center justify-center w-screen  py-[6em] sm:gap-4 gap-1  ">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game, i) => {
              return (
                <tr key={i}>
                  <td className="px-4 py-2">{game.name}</td>
                  <td className="px-4 py-2">{game.score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <div className="flex flex-wrap items-center justify-center gap-4 ">
        {games.map((game, i) => {
          return (
            <div
              key={i}
              className="p-8 text-white bg-[#ffffffb7] rounded-lg"
              style={{
                backdropFilter: "blur(2.5em)",
                backgroundImage: `url(${GameBoards[i]})`,
              }}
            >
              <h1 className="font-extrabold uppercase">{game.name}</h1>
              <ol className="mt-8 list-decimal">
                {game.scores.map((score, i) => {
                  return (
                    <li
                      key={i}
                      className="flex items-center justify-between gap-8"
                      style={{
                        color:
                          i === 0
                            ? "#FFD700"
                            : i === 1
                            ? "#BEC2CB"
                            : i === 2
                            ? "#B08D57"
                            : "#fff",
                      }}
                    >
                      <h1 className="uppercase">{score.name}</h1>
                      <h1 className="">{score.score}</h1>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Scores;
