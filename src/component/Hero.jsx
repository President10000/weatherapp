import Sunup from "../weather/sunup.png";
import Sundown from "../weather/sundown.png";
import Plane from "../weather/plane.png";

const Hero = () => {
  return (
    <div className="flex justify-between my-4 py-2 w-full text-[#d4cfcf] ">
      <div className="mt-3 ml-3">
        <span className="text-[14px] flex justify-between text-[#fff] ">
          <img src={Plane} className="h-[14px] w-[14px] mr-2 mt-1" />
          New York,USA
        </span>
        <p className="text-[12px] text-[#d4cfcf]">Today 29 Sept</p>
      </div>
      <div className=" text-[13px] mt-3 mr-2">
        <p className=" flex justify-between text-[#fff]">
          {" "}
          <img src={Sunup} alt="" className="h-3 w-3 mr-2" /> 07:19
        </p>
        <p className=" flex justify-between text-[#fff]">
          <img src={Sundown} alt="" className="h-3 w-3 mr-2" />
          19:32
        </p>
      </div>
    </div>
  );
};

export default Hero;
