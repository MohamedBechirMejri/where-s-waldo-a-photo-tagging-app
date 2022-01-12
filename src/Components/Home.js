import GameBoards from "../Assets/Gameboards";

const Home = () => {
  return (
    <div className="flex flex-wrap items-center justify-center w-screen  py-[6em] gap-4 bg-[#272727]">
      {GameBoards.map((game, index) => {
        return (
          <img
            src={game}
            alt={`game-${index}`}
            className="w-1/6 transition-all rounded-2xl hover:scale-105"
          />
        );
      })}
    </div>
  );
};

export default Home;
