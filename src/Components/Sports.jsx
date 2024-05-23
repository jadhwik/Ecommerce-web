import boot1 from "../assets/Football/boot1.png";
import boot2 from "../assets/Football/boot2.png";
import boot3 from "../assets/Football/boot3.png";
import boot4 from "../assets/Football/boot4.png";

const Sports = () => {
  return (
    <div className="bg-[#FFF5C3] m-5 rounded-xl">
      <h2 className="text-2xl p-5">Football</h2>
      <div className="grid grid-cols-4 grid-row-2 p-5">
        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={boot1}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">
              Nike Zoom Mercurial Superfly 9 Academy FG/MG Firm Ground Soccer
            </p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 10000</h3>
          </div>
        </div>

        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={boot2}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">
              Nike Suprefly 8 Pro Km AG Artificial Grass Football Boots/Soccer
              Cleats DJ3978-506
            </p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 2000</h3>
          </div>
        </div>

        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={boot3}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">Nike Air zoom</p>
            <p className="opacity-50">Men's boots</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 5000</h3>
          </div>
        </div>

        <div className="bg-[#94a3b8] max-w-60 p-5 rounded-xl bg-opacity-25 hover:bg-opacity-75 flex flex-col justify-between mt-5 ml-5">
          <img src={boot4}></img>
          <div>
            <p className="text-orange-600">Just in</p>
            <p className="text-xl">Nike Teimpo</p>
            <p className="opacity-50">Men's Shoes</p>
            <p className="opacity-50">1 Colour</p>
            <h3>Mrp: ₹ 1000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
