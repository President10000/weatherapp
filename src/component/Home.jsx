import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Hero from "./Hero";

import Chart from "./Chart";
import Footer from "./footer/Footer";
import Testo from "./Testo";

const Home = () => {
  return (
    <div
      className="bg-[#5C9CE5] flex  xs:flex-col flex-row  rounded-[40px] xl:max-w-[1180px] w-full xl:max-h-[600px] h-screen  m-20 shadow-2xl
    "
    >
      <div className=" basis-1/4 justify-start p-2 ">
        <Leftbar />
        <Hero />
        <Testo />
      </div>
      <div className="  basis-3/4  bg-[#AFCFF2] rounded-[40px] p-3 ">
        <Rightbar />
        <Chart />

        <Footer />
      </div>
    </div>
  );
};

export default Home;
