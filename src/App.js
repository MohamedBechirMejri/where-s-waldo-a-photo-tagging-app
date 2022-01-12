import Nav from "./Components/Nav";
import GamePage from "./Components/GamePage";
import { useState } from "react";
import Home from "./Components/Home";

const App = () => {
  const [game, setGame] = useState("n64");
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="App">
      <Nav setCurrentPage={setCurrentPage} currentPage={currentPage} />

      {currentPage === "home" ? <Home /> : <GamePage game={game} />}
    </div>
  );
};

export default App;
