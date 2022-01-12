import dreamcast from "../Assets/GameBoards/dreamcast.jpg";
import gamecube from "../Assets/GameBoards/gamecube.jpg";
import n64 from "../Assets/GameBoards/n64.jpg";
import ps1 from "../Assets/GameBoards/ps1.jpg";
import ps2 from "../Assets/GameBoards/ps2.jpg";
import ps4 from "../Assets/GameBoards/ps4.jpg";
import xbox from "../Assets/GameBoards/xbox.jpg";
import xbox360 from "../Assets/GameBoards/xbox360.jpg";

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
      />
    </div>
  );
};

export default GamePage;
