import Timer from "./Nav/Timer";
import Characters from "./Nav/Characters";

const Nav = () => {
  return (
    <nav className="fixed w-screen h-[3.5em] flex justify-around items-center text-2xl font-extrabold p-3">
      <Characters />
      <h1>Logo</h1>
      <Timer />
    </nav>
  );
};

export default Nav;
