import dreamcast from "../../Assets/GameBoards/dreamcast.jpg";
import gamecube from "../../Assets/GameBoards/gamecube.jpg";
import n64 from "../../Assets/GameBoards/n64.jpg";
import ps1 from "../../Assets/GameBoards/ps1.jpg";
import ps2 from "../../Assets/GameBoards/ps2.jpg";
import ps4 from "../../Assets/GameBoards/ps4.jpg";
import xbox from "../../Assets/GameBoards/xbox.jpg";
import xbox360 from "../../Assets/GameBoards/xbox360.jpg";

const GameBoard = (name) => {
  switch (name) {
    case "dreamcast":
      return dreamcast;
    case "gamecube":
      return gamecube;
    case "n64":
      return n64;
    case "ps1":
      return ps1;
    case "ps2":
      return ps2;
    case "ps4":
      return ps4;
    case "xbox":
      return xbox;
    case "xbox360":
      return xbox360;

    default:
      break;
  }
};

export default GameBoard;
