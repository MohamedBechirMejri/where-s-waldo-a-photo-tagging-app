import GameBoards from "../Assets/Gameboards";

const games = [
  {
    name: "dreamcast",
    scores: [
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
    ],
  },
  {
    name: "gamecube",
    scores: [
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
    ],
  },
  {
    name: "n64",
    scores: [
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
    ],
  },
  {
    name: "ps1",
    scores: [
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
    ],
  },
  {
    name: "ps2",
    scores: [
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
    ],
  },
  {
    name: "ps4",
    scores: [
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
    ],
  },
  {
    name: "xbox",
    scores: [
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
    ],
  },
  {
    name: "xbox360",
    scores: [
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
      ["dude1", 100],
      ["dude2", 90],
      ["dude3", 80],
    ],
  },
];

const Scores = () => {
  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen gap-8 py-20 text-4xl text-center text-white">
      <h1 className="text-5xl">Leaderboards</h1>
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
                      <h1 className="uppercase">{score[0]}</h1>
                      <h1 className="">{score[1]}</h1>
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
