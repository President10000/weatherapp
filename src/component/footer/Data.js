import drop from "../../weather/footer/wet.png";
import wind from "../../weather/footer/wind.png";
import rain from "../../weather/footer/rain.png";
import sun from "../../weather/footer/sun.png";
import thermo from "../../weather/footer/thermo.png";
import rainy from "../../weather/footer/rainy.png";
export const data1 = {
  title: "Humidity",
  humidity_data: "82%",
  subtitle: "bad",
  imgSrc: drop,
  states: [
    { con: "good", val: "12%" },
    { con: "normal", val: "18%" },
    { con: "bad", val: "23%" },
  ],
};
export const data2 = {
  title: "Wind",
  humidity_data: "8",
  subtitle: "Km/h",
  imgSrc: wind,
  states: [
    { con: "10", val: "100%" },
    { con: "20", val: "100%" },
    { con: "30", val: "0%" },
    { con: "40", val: "0%" },
    { con: "50", val: "0%" },
  ],
};
export const data3 = {
  title: "Precipitation",
  humidity_data: "1.4",
  subtitle: "cm",
  imgSrc: rain,
  states: [
    { con: "01", val: "100%" },
    { con: "10", val: "80%" },
    { con: "20", val: "0%" },
    { con: "30", val: "0%" },
    { con: "40", val: "0%" },
    { con: "50", val: "0%" },
    { con: "60", val: "0%" },
  ],
};
export const data4 = {
  title: "UV index",
  humidity_data: "4",
  subtitle: "medium",
  imgSrc: sun,
  states: [
    { con: "02", val: "100%" },
    { con: "05", val: "80%" },
    { con: "07", val: "0%" },
    { con: "10", val: "0%" },
    { con: "12", val: "0%" },
  ],
};
export const data5 = {
  title: "Feels like",
  humidity_data: "30\u00B0",
  subtitle: "",
  imgSrc: thermo,
  states: [{ con: "30\u00B0", val: "40%" }],
};
export const data6 = {
  title: "Chance of rain",
  humidity_data: "42%",
  subtitle: "",
  imgSrc: rainy,
  states: [{ con: "30\u00B0", val: "40%" }],
};
