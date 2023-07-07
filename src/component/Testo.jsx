import sideleft from "../weather/sideleft.png";
import sideright from "../weather/sideright.png";

const Testo = () => {
  return (
    <div className="flex justify-between text-center mt-[50px] w-full">
      <div>
        {" "}
        <img src={sideleft} className="mt-8 cursor-pointer" />
      </div>
      <div>
        <span className="text-[80px] text-white ml-3  ">27&deg;</span>
      </div>
      <div>
        <img src={sideright} className="mt-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default Testo;
