import Timer from "./Nav/Timer";
import Characters from "./Nav/Characters";

const Nav = () => {
  return (
    <nav className="fixed w-screen h-[3em] flex justify-center items-center text-2xl font-extrabold ">
      <Characters />
      <h1>Logo</h1>
      <Timer />
    </nav>
  );
};

export default Nav;
