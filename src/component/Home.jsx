import React from "react";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Hero from "./Hero";
import Number from "./Number";
import Paragraph from "./Paragraph";
import Chart from "./Chart";
import Footer from "./Footer";

const Home = () => {
  return (
    <div
      className="bg-[#5C9CE5] flex  xs:flex-col flex-row  rounded-[40px] xl:max-w-[1080px] w-full xl:max-h-[550px] h-screen  m-20 shadow-2xl
    "
    >
      <div className=" basis-1/4 justify-start p-2 ">
        <Leftbar />
        <Hero />
        <Number />
      </div>
      <div className="  basis-3/4  bg-white rounded-[40px] p-3 ">
        <Rightbar />
        <Paragraph />
        <Chart />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
