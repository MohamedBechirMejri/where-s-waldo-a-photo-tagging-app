import GameBoards from "../Assets/Gameboards";

const [dreamcast, gamecube, n64, ps1, ps2, ps4, xbox, xbox360] = GameBoards;

const GamePage = (props) => {
  return (
    <div className="flex items-center justify-center ">
      <img
        draggable="false"
        src={
          props.game.console === "ps1"
            ? ps1
            : props.game.console === "ps2"
            ? ps2
            : props.game.console === "ps4"
            ? ps4
            : props.game.console === "xbox"
            ? xbox
            : props.game.console === "xbox360"
            ? xbox360
            : props.game.console === "gamecube"
            ? gamecube
            : props.game.console === "dreamcast"
            ? dreamcast
            : n64
        }
        alt={props.game.console}
        className="w-full h-full"
        onClick={(e) => {
          const rect = e.target.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          return {
            x,
            y,
          };
        }}
      />
    </div>
  );
};

export default GamePage;
