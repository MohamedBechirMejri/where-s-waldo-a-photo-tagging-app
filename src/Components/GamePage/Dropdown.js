const Dropdown = (props) => {
  return (
    <div
      className="absolute flex flex-col overflow-hidden text-xl text-black transition-all origin-top bg-transparent rounded"
      style={{
        top: `${props.currentPosition.y}%`,
        left: `${props.currentPosition.x}%`,
      }}
    >
      {props.chars.map((character, i) => (
        <button
          key={character.alt}
          className="p-4 transition-all bg-[#ffffffa1] hover:bg-[#00000079] hover:text-white animate-revealDD  opacity-0 flex flex-col justify-between items-center uppercase sm:flex-row gap-4"
          onClick={() => {
            const { x, y } = props.currentPosition;
            const { xMax, yMax, xMin, yMin } = character.coords;

            if (+x > +xMin && +x < +xMax && +y > +yMin && +y < +yMax) {
              character.isFound = true;
              props.setChars([...props.chars]);
            }
            props.setCurrentPosition(null);
          }}
          style={{
            backdropFilter: "blur(0.5em)",
            animationDelay: `${(i + 1) * 0.1}s`,
          }}
        >
          <img
            src={character.src}
            alt={character.alt}
            className="h-[1.75em]"
            draggable="false"
          />
          {character.alt}
        </button>
      ))}
    </div>
  );
};

export default Dropdown;
