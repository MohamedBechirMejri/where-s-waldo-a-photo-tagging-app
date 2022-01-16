const Dropdown = (props) => {
  return (
    <div
      className="absolute flex flex-col px-4 bg-white rounded "
      style={{
        top: `${props.currentPosition.y}%`,
        left: `${props.currentPosition.x}%`,
      }}
    >
      <button>test</button>
      <button>test</button>
      <button>test</button>
    </div>
  );
};

export default Dropdown;
