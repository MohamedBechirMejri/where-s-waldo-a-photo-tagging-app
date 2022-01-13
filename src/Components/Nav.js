import Timer from "./Nav/Timer";
import Characters from "./Nav/Characters";

const Nav = (props) => {
  return (
    <nav
      className="fixed top-0 z-10 flex items-center justify-around w-screen p-3 text-2xl font-extrabold text-white select-none h-fit"
      style={{
        "-webkit-text-stroke": "1px white",
      }}
    >
      {props.currentPage === "game" ? (
        <Characters />
      ) : (
        <button
          className="text-2xl text-transparent transition-all active:scale-95 hover:text-white"
          onClick={() => props.setCurrentPage("credits")}
        >
          Credits
        </button>
      )}
      <h1
        className="text-3xl text-transparent uppercase transition-all active:scale-95 hover:text-white"
        style={{
          "-webkit-text-stroke": "1px white",
        }}
        onClick={() => props.setCurrentPage("home")}
      >
        🦅I
      </h1>
      {props.currentPage === "game" ? (
        <Timer />
      ) : (
        <button
          className="text-2xl text-transparent transition-all active:scale-95 hover:text-white"
          onClick={() => props.setCurrentPage("scores")}
        >
          Top Scores
        </button>
      )}
    </nav>
  );
};

export default Nav;
