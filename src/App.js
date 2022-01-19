import Nav from "./Components/Nav";
import GamePage from "./Components/GamePage";
import { useState } from "react";
import Home from "./Components/Home";

const App = () => {
  const [game, setGame] = useState("n64");
  const [currentPage, setCurrentPage] = useState("home");
  const [chars, setChars] = useState([]);

  return (
    <div className="bg-[#272727] min-h-screen w-screen">
      <Nav
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        game={game}
        chars={chars}
      />

      {currentPage === "game" ? (
        <GamePage game={game} chars={chars} setChars={setChars} />
      ) : currentPage === "credits" ? (
        <div>credits</div>
      ) : currentPage === "scores" ? (
        <div>Scores</div>
      ) : (
        <Home setCurrentPage={setCurrentPage} setGame={setGame} />
      )}
    </div>
  );
};

export default App;
