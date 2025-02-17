import img1 from "../assets/R_1.jpg";
import img2 from "../assets/R_2.jpg";
import img3 from "../assets/R_3.jpg";
import img4 from "../assets/R_4.jpg";
import { Menu } from 'lucide-react'; // Verifique se o nome do ícone está correto

// Navbar Component
function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-4 backdrop-blur-lg bg-black/80 rounded-b-lg z-10">
      <div className="flex items-center gap-3">
        <Menu size={24} className="text-white" />
      </div>
      <div className="text-3xl font-bold text-white">LOGO</div>
      <nav className="hidden md:flex justify-center items-center gap-6 text-white">
        <a href="#" className="hover:text-gray-400">Menu</a>
        <a href="#" className="hover:text-gray-400">About</a>
      </nav>
      <button className="border border-[#D9D9D9] text-white px-6 py-2 rounded-lg hover:bg-gray-700">Book</button>
    </header>
  );
}

// Hero Component
const Hero = () => {
  return (
    <div className="relative">
      {/* Navbar inside Hero */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 w-full mt-20">
        {/* Main Image */}
        <div className="flex justify-center col-span-1 sm:w-full md:w-[75%]">
          <img 
            className="w-full h-auto object-cover rounded-lg shadow-xl"
            src={img1} 
            alt="Imagem principal do BookFastFood"
          />
          <h2 className="text-5xl text-white font-bold absolute top-[75%] left-6">BookFastFood</h2>
        </div>

        {/* Other Images */}
        <div className="flex flex-col gap-4 col-span-1">
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
