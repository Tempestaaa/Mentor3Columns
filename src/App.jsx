import Card from "./components/Card";
import iconSedans from "./assets/images/icon-sedans.svg";
import iconSuvs from "./assets/images/icon-suvs.svg";
import iconLuxury from "./assets/images/icon-luxury.svg";

const data = [
  {
    name: "sedans",
    icon: `${iconSedans}`,
    desc: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    background: "orange",
  },
  {
    name: "suvs",
    icon: `${iconSuvs}`,
    desc: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    background: "cyan",
  },
  {
    name: "luxury",
    icon: `${iconLuxury}`,
    desc: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    background: "darkcyan",
  },
];

function App() {
  return (
    <div className="min-h-screen text-default bg-other grid place-content-center">
      <div className="w-[80%] mx-auto my-8 grid grid-cols-1 md:grid-cols-3 md:w-3/4 rounded-xl overflow-hidden">
        {data.map((item, i) => (
          <Card
            key={i}
            name={item.name}
            icon={item.icon}
            desc={item.desc}
            background={item.background}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
