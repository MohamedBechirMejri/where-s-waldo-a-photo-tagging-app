const Timer = (props) => {
  return (
    <div className="flex items-center justify-center h-full border-white rounded-xl">
      {props.score}
    </div>
  );
};

export default Timer;
