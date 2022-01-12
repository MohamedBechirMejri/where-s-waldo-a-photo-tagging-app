import mario from "../../Assets/Characters/Mario.webp";
import luigi from "../../Assets/Characters/Luigi.png";

const Characters = () => {
  return (
    <div className="flex items-center justify-center  h-full bg-[#ffffff62]   rounded-xl gap-4 w-1/3 overflow-scroll flex-wrap">
      <img src={mario} alt="mario" className="h-[1.75em]" />
      <img src={luigi} alt="mario" className="h-[1.75em]" />
      <img src={mario} alt="mario" className="h-[1.75em]" />
      <img src={mario} alt="mario" className="h-[1.75em]" />
    </div>
  );
};

export default Characters;
