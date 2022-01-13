import GameBoards from "../Assets/Gameboards";

const Home = () => {
  return (
    <div className="flex flex-wrap items-center justify-center w-screen  py-[6em] sm:gap-4 gap-1  ">
      {GameBoards.map((game, index) => {
        return (
          <img
            src={game}
            alt={`game-${index}`}
            className="w-1/3 transition-all sm:w-1/5 rounded-2xl hover:scale-105"
          />
        );
      })}
    </div>
  );
};

export default Home;
