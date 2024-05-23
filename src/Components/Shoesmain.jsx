import nike from "../assets/nike.png";
import logo3 from "../assets/logo3.png";

import vidgif from "../assets/Nike.jpg";

const Shoesmain = () => {
  return (
    <div className="shoes w-full min-h-screen flex flex-col justify-center bg-[#b3e141]">
      <div className=" main1 flex flex-col justify-center items-center gap-20 text-2xl">
        <div className="flex flex-row">
          <div className="flex flex-col relative">
            <h3 className=" nike-quote text-5xl text-pretty text-black   transition-all p-3 absolute inset-0 mt-5 ml-10">
              NOTHING CAN STOP WHAT
              <br></br> WE CAN DO TOGETHER
            </h3>
            <img src={logo3} className="colo"></img>
          </div>

          <div className=" .gif max-w-96">
            <img src={vidgif} className=" main-shoe size-full"></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shoesmain;
