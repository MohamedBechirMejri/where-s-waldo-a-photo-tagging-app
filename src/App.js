import Nav from "./Components/Nav";
import GamePage from "./Components/GamePage";
import { useState } from "react";

const App = () => {
  const [game, setGame] = useState("n64");

  return (
    <div className="App">
      <Nav />
      <GamePage game={game} />
    </div>
  );
};

export default App;
