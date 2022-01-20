import GameBoards from "../Assets/Gameboards";
import { useEffect, useState } from "react";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const Scores = () => {
  const [games, setGames] = useState([]);

  const db = getFirestore();
  const colRef = collection(db, "leaderboards");
  useEffect(() => {
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      setGames(snapshot.docs[0].data().games);
    });
    return () => unsubscribe();
  }, [db]);

  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen gap-8 py-20 text-4xl text-center text-white select-none animate-revealScores">
      <h1 className="text-5xl font-extrabold uppercase">
        scores <br /> <span className="text-lg">(less is better)</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4 ">
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
                {Object.entries(game.scores).map((score, i) => {
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
      </div>
    </div>
  );
};

export default Scores;
