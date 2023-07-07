import Sun from "../weather/sun.png";
import Cloud from "../weather/cloud.png";
import Arrowright from "../weather/arrow_right.png";
import Arrowdown from "../weather/arrowdown.png";

const Chart = () => {
  const data = [
    {
      time: "Now",
      con: Sun,
      temp: "27",
      rain: "23",
      clipPath: "polygon(0 76%, 100% 76%, 100% 100%, 0 100%)",
    },
    {
      time: "11:00",
      con: Sun,
      temp: "27",
      rain: "29",
      clipPath: "polygon(0 76%, 100% 61%, 100% 100%, 0 100%)",
    },
    {
      time: "12:00",
      con: Cloud,
      temp: "27",
      rain: "58",
      clipPath: "polygon(1% 63%, 100% 46%, 100% 100%, 0 100%)",
    },
    {
      time: "13:00",
      con: Cloud,
      temp: "27",
      rain: "75",
      clipPath: "polygon(0 63%, 100% 75%, 100% 100%, 0 100%)",
    },
    {
      time: "14:00",
      con: Sun,
      temp: "27",
      rain: "33",
      clipPath: "polygon(0 75%, 100% 86%, 100% 100%, 0 100%)",
    },
    {
      time: "15:00",
      con: Cloud,
      temp: "27",
      rain: "20",
      clipPath: "polygon(0 86%, 100% 75%, 100% 100%, 0 100%)",
    },
    {
      time: "16:00",
      con: Cloud,
      temp: "27",
      rain: "73",
      clipPath: "polygon(0 76%, 100% 65%, 100% 100%, 0 100%)",
    },
    {
      time: "17:00",
      con: Sun,
      temp: "27",
      rain: "49",
      clipPath: "polygon(0 65%, 100% 65%, 100% 100%, 0 100%)",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center rounded-xl bg-[#eff] h-56 W-[200px] m-4 p-2 pb-2">
      <div className="flex justify-between items-center w-full px-3 pt-2">
        <h4>Upcoming hours</h4>
        <span className="flex justify-center items-center gap-x-16">
          <h4 className=" flex justify-between text-[#b0c1d3] font-bold">
            Rain precipitation{" "}
            <img
              src={Arrowdown}
              alt="doen"
              className="h-5 w-4 mt-[3px] cursor-pointer"
            />{" "}
          </h4>
          <h4 className="flex justify-between">
            Next days{" "}
            <img src={Arrowright} className="h-5 w-4 mt-[3px] cursor-pointer" />
          </h4>
        </span>
      </div>
      <div className="flex justify-center items-center w-full">
        {data.map((item, i) => {
          const { time, con, rain, temp, clipPath } = item;
          return (
            <div key={i} className="mb-2 mt-1">
              <p className="ml-[1px] mt-2 font-medium ">{time}</p>
              <p className="icon h-4 w-4 my-1">
                <img src={con} alt="icon" />
              </p>
              <p className="font-normal">{temp}&#8451;</p>
              <div className="flex justify-center items-center h-20 w-[90px]">
                <div className="h-full w-[1px] bg-slate-800"></div>
                <div
                  className="h-20 w-[90px] bg-blue-500"
                  style={{
                    clipPath: clipPath,
                  }}
                ></div>
              </div>
              <p>{rain}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Chart;
