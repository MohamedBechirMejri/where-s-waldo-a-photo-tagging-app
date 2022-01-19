const Credits = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen gap-8 py-20 text-4xl text-center text-white select-none animate-revealScores">
      <h1 className="text-5xl font-extrabold uppercase">Credits</h1>
      <p className="text-3xl font-medium">
        <br />
        <span className="text-[#61DBFB]">React </span>+
        <span className="text-[#FFA611]"> Firebase </span>
        Project by{" "}
        <a
          href="https://github.com/MohamedBechirMejri"
          className="text-[#43c294] hover:underline"
          target={"_blank"}
          rel="noreferrer"
        >
          MohamedBechirMejri
        </a>{" "}
        for{" "}
        <a
          href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/where-s-waldo-a-photo-tagging-app"
          className="text-[#e3b260]  hover:underline"
          target={"_blank"}
          rel="noreferrer"
        >
          The Odin Project
        </a>
        .
        <br /> <br />
        Game console images provided by{" "}
        <span className="underline">Pierre Roussel</span>.
        <br /> <br />
        Full collection
        <a
          href="https://www.artstation.com/artwork/oOVVlJ"
          className="text-[red]  hover:underline"
          target={"_blank"}
          rel="noreferrer"
        >
          {" "}
          Here{" "}
        </a>
        at Artstation.
      </p>
    </div>
  );
};

export default Credits;
