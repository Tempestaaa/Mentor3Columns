import icons from "../assets/images/icon-sedans.svg";

const Card = ({ name, icon, desc, background }) => {
  return (
    <div
      className={` bg-${background} text-white p-8 grid grid-cols-1 grid-rows-default gap-8 place-items-start`}
    >
      <div>
        <img src={icon} />
      </div>
      <h1 className="uppercase text-3xl font-big-shoulders-display">{name}</h1>
      <p className="text-default text-paragraphs font-lexend-deca">{desc}</p>
      <button
        className={`capitalize text-left bg-white py-2 px-5 rounded-3xl font-lexend-deca text-sm hover:bg-transparent hover:border-white hover:border-solid hover:border-2 text-${background} hover:text-white relative left-0 top-1/2 -translate-y-1/2`}
      >
        learn more
      </button>
    </div>
  );
};

export default Card;
