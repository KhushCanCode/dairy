import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App() {
  // useGSAP(() => {
  //   if (!ScrollSmoother.get()) { // Prevent multiple instances
  //     ScrollSmoother.create({
  //       wrapper: "#smooth-wrapper",
  //       content: "#smooth-content",
  //       smooth: 1,
  //       effects: true,
  //     });
  //   }
  // }, []); // run only once

  return (
    <>
      <Navbar />
      {/* <div id="smooth-wrapper">
        <div id="smooth-content"> */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
          <Footer />
        {/* </div>
      </div> */}
    </>
  );
}
