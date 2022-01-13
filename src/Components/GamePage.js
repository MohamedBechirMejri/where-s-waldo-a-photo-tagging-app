import GameBoards from "../Assets/Gameboards";

const [dreamcast, gamecube, n64, ps1, ps2, ps4, xbox, xbox360] = GameBoards;

const GamePage = (props) => {
  return (
    <div className="flex items-center justify-center ">
      <img
        src={
          props.game === "ps1"
            ? ps1
            : props.game === "ps2"
            ? ps2
            : props.game === "ps4"
            ? ps4
            : props.game === "xbox"
            ? xbox
            : props.game === "xbox360"
            ? xbox360
            : props.game === "gamecube"
            ? gamecube
            : props.game === "dreamcast"
            ? dreamcast
            : n64
        }
        alt={props.game}
        className="w-full h-full"
        onClick={(e) => {
          const rect = e.target.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          console.log(x, y);
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
