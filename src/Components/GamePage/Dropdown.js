const Dropdown = (props) => {
  return (
    <div
      className="absolute flex flex-col overflow-hidden text-xl transition-all origin-top bg-white rounded animate-revealDD"
      style={{
        top: `${props.currentPosition.y}%`,
        left: `${props.currentPosition.x}%`,
      }}
    >
      <button
        className="p-4 transition-all hover:bg-gray-600 hover:text-white"
        onClick={() => props.setCurrentPosition(null)}
      >
        Mario
      </button>
      <button
        className="p-4 transition-all hover:bg-gray-600 hover:text-white"
        onClick={() => props.setCurrentPosition(null)}
      >
        Luigi
      </button>
      <button
        className="p-4 transition-all hover:bg-gray-600 hover:text-white"
        onClick={() => props.setCurrentPosition(null)}
      >
        test
      </button>
    </div>
  );
};

export default Dropdown;
