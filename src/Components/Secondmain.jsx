import nike from "../assets/nike.png";
import logo3 from "../assets/logo3.png";
import hyper2 from "../assets/hyper2.jpg";
import hyper from "../assets/hyper.jpg";

const Secondmain = () => {
  return (
    <div className="  second-main w-full min-h-screen flex flex-col justify-center bg-[#95a4bb] ">
      <div className="flex flex-row justify-center items-center">
        <img src={hyper2} className="animate-pulse"></img>
        <img src={hyper}></img>
      </div>
    </div>
  );
};
export default Secondmain;
