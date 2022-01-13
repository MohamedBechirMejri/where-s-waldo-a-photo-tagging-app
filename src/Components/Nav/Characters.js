
import characters from '../../Assets/characters';
const Characters = (props) => {
  return (
    <div className="flex items-center justify-center  h-full bg-[#ffffff62]   rounded-xl gap-4 w-1/3 overflow-scroll flex-wrap">
      {characters[props.game.i].map((character) => (
        <img
          src={character.src}
          alt={character.alt}
          className="h-[1.75em]"
          draggable="false"
          key={character.alt}
        />
      ))}
    </div>
  );
};

export default Characters;
