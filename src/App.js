import Nav from "./Components/Nav";
import GamePage from "./Components/GamePage";
import { useState } from "react";
import Home from "./Components/Home";
import Scores from "./Components/Scores";
import Credits from "./Components/Credits";

const App = () => {
  const [game, setGame] = useState("n64");
  const [currentPage, setCurrentPage] = useState("home");
  const [chars, setChars] = useState([]);
  const [score, setScore] = useState(0);

  return (
    <div className="bg-[#272727] min-h-screen w-screen">
      <Nav
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        game={game}
        chars={chars}
        score={score}
      />

      {currentPage === "game" ? (
        <GamePage
          game={game}
          chars={chars}
          setChars={setChars}
          setCurrentPage={setCurrentPage}
          setGame={setGame}
          score={score}
          setScore={setScore}
        />
      ) : currentPage === "credits" ? (
        <Credits />
      ) : currentPage === "scores" ? (
        <Scores />
      ) : (
        <Home
          setCurrentPage={setCurrentPage}
          setGame={setGame}
          setScore={setScore}
        />
      )}
    </div>
  );
};

export default App;
