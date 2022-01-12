import Timer from "./Nav/Timer";
import Characters from "./Nav/Characters";

const Nav = () => {
  return (
    <nav className="fixed top-0 flex items-center justify-around w-screen p-3 text-2xl font-extrabold text-white select-none h-fit">
      <Characters />
      <h1>Logo</h1>
      <Timer />
    </nav>
  );
};

export default Nav;
