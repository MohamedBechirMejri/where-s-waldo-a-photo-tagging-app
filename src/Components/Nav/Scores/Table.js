const Table = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-5/6 gap-1 text-white rounded-lg sm:gap-4 animate-revealScores">
      {" "}
      <h1 className="font-medium uppercase animate-revealScores">
        {props.col}
      </h1>
      <table className="p-8 rounded-lg table-auto ">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Score</th>
          </tr>
        </thead>
        <tbody>
          {props.games.map((game, i) => {
            return (
              <tr
                key={i}
                style={{
                  color:
                    i === 0
                      ? "#FFD700"
                      : i === 1
                      ? "#BEC2CB"
                      : i === 2
                      ? "#B08D57"
                      : "#fff",
                  animation: `revealScores ${(i + 1) * 0.2}s ease-in-out`,
                }}
              >
                <td className="px-4 py-2">{game.name}</td>
                <td className="px-4 py-2">{game.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
