import img1 from "../assets/R_1.jpg";
import img2 from "../assets/R_2.jpg";
import img3 from "../assets/R_3.jpg";
import img4 from "../assets/R_4.jpg";
import Navbar from "./Navbar";

// Hero Component
const Hero = () => {
  return (
    <div className="relative">
      {/* Navbar inside Hero */}
      <Navbar />

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-9 w-full mt-20">
        {/* Main Image - 80% width */}
        <div className="flex justify-center col-span-4 md:col-span-4">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-xl"
            src={img1}
            alt="Imagem principal do BookFastFood"
          />
          <h2 className="text-5xl text-white font-bold absolute top-[75%] left-6">
            BookFastFood
          </h2>
        </div>

        {/* Other Images - 20% width for 3 images */}
        <div className="flex flex-col gap-4 col-span-1 md:col-span-1">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src={img2}
            alt="Imagem 2"
          />
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src={img3}
            alt="Imagem 3"
          />
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src={img4}
            alt="Imagem 4"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
