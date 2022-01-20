const GameOver = (props) => {
  return (
    <form
      className="fixed flex flex-col items-center justify-between gap-6 rounded-lg p-8 text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit bg-[#ffffffa1] text-center font-bold capitalize ring-black ring animate-reveal"
      style={{
        backdropFilter: "blur(2.5em)",
      }}
      onSubmit={() => {
        props.setCurrentPage("scores");
        props.setScore(0);
      }}
    >
      <h1 className="sm:text-[2em]">
        Score: <br /> {props.score}
      </h1>

      <input
        type="text"
        placeholder="Enter Your Name"
        className="text-lg font-bold text-center capitalize bg-transparent outline-none placeholder:text-black"
        minLength={3}
        required
      />
      <button
        className="py-3 font-bold uppercase transition-all bg-transparent rounded-lg px-7 ring-black ring-2 sm:hover:bg-black hover:text-white active:scale-95 hover:ring-0"
        // onClick={}
      >
        Submit
      </button>
    </form>
  );
};

export default GameOver;