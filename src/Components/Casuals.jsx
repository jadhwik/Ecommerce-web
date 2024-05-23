import casual1 from "../assets//casuals/casual1.png";
import casual2 from "../assets/casuals/casual2.png";
import casual3 from "../assets/casuals/casual3.png";
import casual4 from "../assets/casuals/casual4.png";
import casual5 from "../assets/casuals/casual5.png";
import casual6 from "../assets/casuals/casual6.png";
import casual7 from "../assets/casuals/casual7.png";
import casual8 from "../assets/casuals/casual8.png";

const Casuals = () => {
  return (
    <div className="bg-[#FFF886] m-2 rounded-xl">
      <h2 className="text-2xl p-5">Causuals</h2>
      <div className="grid grid-cols-4 grid-rows-2 p-5 ">
        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={casual1}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">
              Nike Air Max 270 - Men's Casual Running Shoes - Black
            </p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 500</h3>
          </div>
        </div>

        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={casual2}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">
              Nike Air Max 270 - Men's Casual Running Shoes - White
            </p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 500</h3>
          </div>
        </div>

        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={casual3}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">Women's Sneakers & Athletic Shoes</p>
            <p className="opacity-50">Womens's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 1000</h3>
          </div>
        </div>

        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={casual4}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">Nike Dunk Low Industrial Blue Sashiko</p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 1000</h3>
          </div>
        </div>

        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={casual5}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">Nike Air Monarch IV</p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 2000</h3>
          </div>
        </div>

        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={casual6}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">Chaussure Nike Air Max Plus. Nike FR</p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 3000</h3>
          </div>
        </div>

        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={casual7}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">Nike Air Max Plus</p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 7000</h3>
          </div>
        </div>

        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={casual8}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">Nike Air Max Motion 2 Mens Running Shoes</p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 6000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casuals;
