import { Routes, Route, Link } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <div>
      <Navbar/>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />

          {/* fallback route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>

        <Footer/>
    </div>
  );
}
