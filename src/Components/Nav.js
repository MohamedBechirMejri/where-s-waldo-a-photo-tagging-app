import Timer from "./Nav/Timer";
import Characters from "./Nav/Characters";

const Nav = (props) => {
  return (
    <nav
      className="fixed top-0 z-10 flex items-center justify-between w-screen p-4 text-2xl font-extrabold text-transparent text-white select-none h-fit"
      style={{
        WebkitTextStroke: "0.5px white",
      }}
    >
      {props.currentPage === "game" ? (
        <Characters game={props.game} chars={props.chars} />
      ) : (
        <button
          className="transition-all active:scale-95 hover:text-white"
          onClick={() => props.setCurrentPage("credits")}
        >
          Credits
        </button>
      )}
      <h1
        className="text-3xl uppercase transition-all active:scale-95 hover:text-white"
        onClick={() => props.setCurrentPage("home")}
      >
        Home
      </h1>
      {props.currentPage === "game" ? (
        <Timer score={props.score} />
      ) : (
        <button
          className="transition-all active:scale-95 hover:text-white"
          onClick={() => props.setCurrentPage("scores")}
        >
          Top Scores
        </button>
      )}
    </nav>
  );
};

export default Nav;
