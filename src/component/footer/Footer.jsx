import Humidity from "./subcomps/Humadity";

import { data1, data2, data3, data4, data5, data6 } from "./Data";

const Footer = () => {
  return (
    <div>
      <h3 className="mb-2 font-bold">More deals of today's weather</h3>

      <div className="flex justify-between items-center mx-12 my-3  ">
        <div className="h-full  w-[200px] bg-white rounded-[20px] px-3 ">
          <Humidity {...data1} />
        </div>

        <div className="h-full  w-[200px] bg-white rounded-[20px] px-3 ">
          <Humidity {...data2} />
        </div>
        <div className="h-full  w-[200px] bg-white rounded-[20px] px-3 ">
          <Humidity {...data3} />
        </div>
      </div>
      <div className="flex justify-between items-center mx-12 my-3 ">
        <div className="h-full  w-[200px] bg-white rounded-[20px] px-3 ">
          <Humidity {...data4} />
        </div>
        <div className="h-full  w-[200px] bg-white rounded-[20px] px-3 ">
          <Humidity {...data5} />
        </div>

        <div className="h-full w-[200px] bg-white rounded-[20px] px-3 ">
          <Humidity {...data6} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
