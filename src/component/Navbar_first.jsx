import addcircle from "../weather/addcircle.png";
import whitedot from "../weather/whitedot.png";

const Navbar_first = () => {
  return (
    <div className="flex flex-col  mr-3  ">
      <nav>
        <ul className=" flex flex-row justify-between  mt-2">
          <li>
            <img
              src={addcircle}
              alt="addcircle"
              className="h-9 w-9  cursor-pointer  ml-3 "
            />
          </li>
          <li>
            <img
              src={whitedot}
              alt="dot white"
              className=" text-white h-12 w-full pb-1 pr-1 mr-2 cursor-pointer"
            />
          </li>
          <li className="flex flex-row  gap-1 justify-between mt-2 ">
            <h3
              className=" cursor-pointer text-white
            "
            >
              &deg;C
            </h3>
            <p
              className=" pointer-events-auto text-white
            "
            >
              |
            </p>
            <h3 className=" cursor-pointer text-white">&deg;F</h3>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center flex-grow">
        {/* Main content for the Leftbar */}
      </div>
    </div>
  );
};

export default Navbar_first;
