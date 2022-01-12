import GameBoard from "../Components/GamePage/GameBoard";

describe("Images", () => {
  it(`should return image based on prop`, () => {
    expect(GameBoard("n64")).toBe("n64.jpg");
    expect(GameBoard("ps1")).toBe("ps1.jpg");
    expect(GameBoard("ps2")).toBe("ps2.jpg");
    expect(GameBoard("ps4")).toBe("ps4.jpg");
    expect(GameBoard("xbox")).toBe("xbox.jpg");
    expect(GameBoard("xbox360")).toBe("xbox360.jpg");
    expect(GameBoard("dreamcast")).toBe("dreamcast.jpg");
    expect(GameBoard("gamecube")).toBe("gamecube.jpg");
  });
});
