import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Landing } from "./pages/Landing";
import { About } from "./pages/About";
import Products from "./pages/Products";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import FranchiseModal from "./components/FranchiseModal";
import MailUsModal from "./components/MailUsModal";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function App() {
  const [isFranchiseModalOpen, setIsFranchiseModalOpen] = useState(false);
  const [isMailUsModalOpen, setIsMailUsModalOpen] = useState(false);


  return (
    <>
      <Navbar 
        onOpenFranchiseModal={() => setIsFranchiseModalOpen(true)}
        onOpenMailUsModal={() => setIsMailUsModalOpen(true)}
      />
    
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
          <Footer onOpenMailUsModal={() => setIsMailUsModalOpen(true)} />
          <FranchiseModal 
            isOpen={isFranchiseModalOpen} 
            onClose={() => setIsFranchiseModalOpen(false)} 
          />
          <MailUsModal 
            isOpen={isMailUsModalOpen} 
            onClose={() => setIsMailUsModalOpen(false)} 
          />
    </>
  );
}
