import React from "react";

const Humidity = ({ title, humidity_data, subtitle, imgSrc, states }) => {
  const containerWidth = states.length === 1 ? "140px" : "auto";

  return (
    <div className="flex flex-col justify-center items-center w-full p-3">
      <div className="flex justify-between items-center w-full px-1">
        <h4 className="font-bold">{title}</h4>
        <span className="h-6 w-6 ml-3 bg-blue-500 rounded-[6px]">
          <img
            src={imgSrc}
            alt="img"
            className="h-5 w-5 justify-center ml-[2px] mt-[1px] "
          />
        </span>
      </div>
      <div className="flex justify-center items-center">
        <h2 className="font-semibold">
          {humidity_data} <span>{subtitle} </span>
        </h2>
      </div>
      <div className="flex justify-evenly items-center gap-x-2">
        {states.map((item, i) => {
          const { con, val } = item;
          return (
            <div key={i}>
              <p>{con}</p>
              <div
                className="h-3  bg-[#AFCFF2] relative rounded-md overflow-hidden"
                style={{ width: containerWidth }}
              >
                <span
                  className={` absolute bg-[#5C9CE5]`}
                  style={{ height: "12px", width: val }}
                ></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Humidity;
