const Characters = (props) => {
  return (
    <div
      className="flex items-center justify-center  h-full bg-[#ffffffa1]   rounded-xl gap-4 w-fit overflow-scroll flex-wrap"
      style={{
        backdropFilter: "blur(2.5em)",
      }}
    >
      {props.chars.map((character) => (
        <img
          src={character.src}
          alt={character.alt}
          className={`" h-[1.75em] ${character.isFound && "opacity-40"} "`}
          draggable="false"
          key={character.alt}
        />
      ))}
    </div>
  );
};

export default Characters;
