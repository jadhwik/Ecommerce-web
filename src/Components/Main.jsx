import { useState, useEffect } from "react";
import Shoes from "./Shoesmain";
import Itemcard from "./Itemcard";
import nikelogo from "../assets/nike-logo.png";
import Secondmain from "./Secondmain";
import Casuals from "./Casuals";
import Sports from "./Sports";
import nikefoot from "../assets/nikefootball.png";
import quote3 from "../assets/quote3.png";
import nikefoot2 from "../assets/nikefootball2.png";
import { Link as ScrollLink, Element } from "react-scroll";

const Main = () => {
  const [component1, setComponent1] = useState(true);
  const [animationStart, setanimeStart] = useState(false);
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setanimeStart(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval;

    if (animationStart) {
      interval = setInterval(() => {
        setCurrent((prevState) => (prevState + 1) % 4);
      }, 4000);
    }

    return () => clearInterval(interval);
  }, [animationStart]);
  const render = () => {
    switch (current) {
      case 0:
        return <Shoes></Shoes>;
      case 1:
        return <Comp4></Comp4>;

      case 2:
        return <Secondmain></Secondmain>;

      case 3:
        return <Comp3></Comp3>;

      // case 3:
      //   return <Comp4></Comp4>;

      default:
        return null;
    }
  };

  const Comp4 = () => {
    return (
      <div className=" comp4 w-full min-h-screen flex flex-col justify-center">
        <div className="flex flex-row justify-center items-center gap-20">
          <img src={quote3} className="w-80"></img>
          <img src={nikefoot2} className="w-auto animate-pulse"></img>
        </div>
      </div>
    );
  };

  const Comp3 = () => {
    return (
      <div className="comp3 w-full min-h-screen flex flex-col justify-center">
        <div className="flex flex-row justify-center items-center gap-20">
          <img src={quote3} className="w-80"></img>
          <img src={nikefoot} className="animate-pulse"></img>
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="menu-bar bg-black bg-opacity-25   fixed  w-full z-10 ">
        <div className="   text-white  flex flex-row justify-between ">
          <div className="p-5 ml-28 text-3xl flex flex-row relative mt-2">
            <img src={nikelogo} className="w-20 opacity-75 "></img>
            <h2 className="text-rose-900 absolute inset-0">NikeStore</h2>
          </div>
          <div className="flex flex-row items-center p-5  gap-20 mr-20">
            <ScrollLink
              to="home"
              smooth={true}
              className="opacity-50 hover:opacity-100 cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="sneakers"
              smooth={true}
              className="opacity-50 hover:opacity-100 cursor-pointer"
            >
              Sneakers
            </ScrollLink>
            <ScrollLink
              to="casuals"
              smooth={true}
              className="opacity-50 hover:opacity-100 cursor-pointer"
            >
              Casuals
            </ScrollLink>
            <ScrollLink
              to="sports"
              smooth={true}
              className="opacity-50 hover:opacity-100 cursor-pointer"
            >
              Sports
            </ScrollLink>
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll">
        <Element name="home">
          <div>{render()}</div>
        </Element>
        <Element name="sneakers">
          <Itemcard />
        </Element>
        <Element name="casuals">
          <Casuals />
        </Element>
        <Element name="sports">
          <Sports />
        </Element>
      </div>
    </div>
  );
};

export default Main;
