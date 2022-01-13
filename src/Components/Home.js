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
          <img
            src={game}
            alt={consoles[i]}
            className="w-1/3 transition-all sm:w-1/5 rounded-2xl sm:hover:scale-105"
            key={consoles[i]}
            onClick={() => {
              props.setGame(consoles[i]);
              props.setCurrentPage("game");
            }}
          />
        );
      })}
    </div>
  );
};

export default Home;
