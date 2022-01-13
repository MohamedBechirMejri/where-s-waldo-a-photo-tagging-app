import Nav from "./Components/Nav";
import GamePage from "./Components/GamePage";
import { useState } from "react";
import Home from "./Components/Home";

const App = () => {
  const [game, setGame] = useState("n64");
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="bg-[#272727] min-h-screen w-screen">
      <Nav setCurrentPage={setCurrentPage} currentPage={currentPage} />

      {currentPage === "game" ? (
        <GamePage game={game} />
      ) : currentPage === "credits" ? (
        <div>credits</div>
      ) : currentPage === "scores" ? (
        <div>Scores</div>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;
