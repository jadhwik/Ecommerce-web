import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import shoe3 from "../assets/shoe3.png";
import shoe4 from "../assets/shoe4.png";
import shoe5 from "../assets/shoe5.png";
import shoe6 from "../assets/shoe6.png";
import shoe7 from "../assets/shoe7.png";
import shoe8 from "../assets/shoe8.png";

const Itemcard = () => {
  return (
    <div className=" bg-[#FFD3A5] m-5 rounded-xl">
      <h2 className="text-2xl p-5">Sneakers</h2>
      <div className="grid grid-cols-4 grid-rows-2 p-5 ">
        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={shoe1}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">Air Jordan</p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 200</h3>
          </div>
        </div>

        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={shoe2}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">
              Men's Nike Dunk Low Retro (Grey Fog) - 9.5
            </p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 1500</h3>
          </div>
        </div>

        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={shoe3}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">Men's Nike SNKRS</p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 2500</h3>
          </div>
        </div>

        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={shoe4}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl"> Nike Air Jordan 1 Royal Blue</p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 5000</h3>
          </div>
        </div>

        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={shoe5}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">Nike Court Vision Mid Winter</p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 3000</h3>
          </div>
        </div>
        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={shoe6}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">Nike Mid Blazers 🔥</p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 6000</h3>
          </div>
        </div>
        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={shoe7}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">Nike Airforce 1, Jigar Mistry</p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 8000</h3>
          </div>
        </div>

        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={shoe8}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">Nike SB Dunk High (Black/Gum)</p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 10000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
