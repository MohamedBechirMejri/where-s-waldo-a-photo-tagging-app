import GameBoard from "../Components/GamePage/GameBoard";
import dreamcast from "../../Assets/GameBoards/dreamcast.jpg";
import gamecube from "../../Assets/GameBoards/gamecube.jpg";
import n64 from "../../Assets/GameBoards/n64.jpg";
import ps1 from "../../Assets/GameBoards/ps1.jpg";
import ps2 from "../../Assets/GameBoards/ps2.jpg";
import ps4 from "../../Assets/GameBoards/ps4.jpg";
import xbox from "../../Assets/GameBoards/xbox.jpg";
import xbox360 from "../../Assets/GameBoards/xbox360.jpg";

describe("Images", () => {
  it(`should return image based on prop`, () => {
    expect(GameBoard("n64")).toBe(n64);
  });
});
