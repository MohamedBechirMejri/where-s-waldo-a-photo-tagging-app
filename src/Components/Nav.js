import Timer from "./Nav/Timer";
import Characters from "./Nav/Characters";

const Nav = (props) => {
  return (
    <nav className="fixed top-0 flex items-center justify-around w-screen p-3 text-2xl font-extrabold text-white select-none h-fit">
      {props.currentPage === "game" && <Characters />}
      <h1
        className="text-3xl text-transparent uppercase transition-all active:scale-95 hover:text-white"
        style={{
          "-webkit-text-stroke": "1px white",
        }}
      >
        🦅I
      </h1>
      {props.currentPage === "game" && <Timer />}
    </nav>
  );
};

export default Nav;
