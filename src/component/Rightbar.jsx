import Avatar from "../weather/avatar.png";
import Three_dot from "../weather/three_dot.png";

const Rightbar = () => {
  return (
    <div className="flex flex-col   p-[4px]">
      <nav>
        <ul className="  flex flex-row space-x-4 justify-between">
          <li>
            <h3
              className="text-[18px] font-bold tracking-tight text-gray-700
            ml-4 "
            >
              Welcome back Isabela!
            </h3>
            <p className="ml-4 text-sm font-medium">
              Checkout ut today{`'`}s weather information{" "}
            </p>
          </li>

          <li className="flex flex-row justify-between gap-3 cursor-pointer">
            <img src={Three_dot} alt=" dott" />
            <img src={Avatar} alt="avatar" className=" h-9 w-9 mr-3" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Rightbar;
