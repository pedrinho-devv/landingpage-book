import { Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menu";
import AboutUs from "./Pages/About";
import Book from "./Pages/Book";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Hero />
      <Routes>
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </div>
  );
};

export default App;