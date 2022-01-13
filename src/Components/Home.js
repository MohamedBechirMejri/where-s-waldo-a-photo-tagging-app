import GameBoards from "../Assets/Gameboards";

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
  return (
    <div className="flex flex-wrap items-center justify-center w-screen  py-[6em] sm:gap-4 gap-1  ">
      {GameBoards.map((game, i) => {
        return (
          <div
            key={consoles[i]}
            onClick={() => {
              props.setGame(consoles[i]);
              props.setCurrentPage("game");
            }}
            className="relative w-1/3 overflow-hidden transition-all sm:w-1/5 rounded-2xl sm:hover:scale-105"
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
