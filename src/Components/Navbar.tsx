import { Menu } from 'lucide-react'; // Verifique se o nome do ícone está correto

function Navbar() {
    return (
      <header className="absolute top-10 left-7 right-0 flex w-[664px] h-[67px] justify-between items-center px-6 py-4 backdrop-blur-lg bg-white/10 rounded-lg z-10">
        <div className="flex items-center gap-3">
          <Menu size={24} className="text-white" />
        </div>
        <div className="text-3xl font-bold text-white">LOGO</div>
        <nav className="hidden md:flex justify-center items-center gap-6 text-white">
          <a href="#" className="hover:text-gray-400">Menu</a>
          <a href="#" className="hover:text-gray-400">About</a>
        </nav>
        <button className="border border-[#D9D9D9] text-white px-6 py-2 rounded-lg hover:bg-gray-700 hover:duration-300">Book</button>
      </header>
    );
  }

export default Navbar