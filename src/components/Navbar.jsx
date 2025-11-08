import { Store, X } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseMove = (e) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.4,
      ease: "elastic.out(1, 0.4)",
    });
  };

  // Animate dropdown
  useEffect(() => {
    if (menuRef.current) {
      if (menuOpen) {
        gsap.to(menuRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          pointerEvents: "auto",
        });
      } else {
        gsap.to(menuRef.current, {
          y: "-100%",
          opacity: 0,
          duration: 0.5,
          ease: "power3.inOut",
          pointerEvents: "none",
        });
      }
    }
  }, [menuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 z-50 py-4 px-4 md:px-6 flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src="/images/logo.png" alt="logo" className="w-14 md:w-16" />
        </div>

        <div
          className="cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <X className="size-6 text-dark-blue" />
          ) : (
            <img src="/images/menu-icon.svg" alt="menu icon" className="size-6" />
          )}
        </div>

        {/* Magnetic Button */}
        <a
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          target="_blank"
          href="https://dairypower.co.in/"
          className="relative font-bold bg-dark-blue text-milk border border-milk px-4 lg:px-6 py-2 rounded-4xl cursor-pointer overflow-hidden"
        >
          <p className="hidden md:block select-none">SHOP</p>
          <Store className="size-4 block md:hidden select-none" />
        </a>
      </nav>

      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-milk z-40 opacity-0 -translate-y-full flex flex-col md:flex-row overflow-hidden"
      >
        {/* Left Side (Links) */}
        <div className="flex flex-col justify-center items-center md:items-start flex-1 px-8 md:px-16 gap-4 text-center md:text-left">
          {["SHOP", "FIND IN STORES", "ABOUT US", "TASTY TALKS", "PROGRAMS", "CONTACTS"].map(
            (item, i) => (
              <h1
                key={i}
                className="text-4xl md:text-6xl font-bold text-dark-blue tracking-tight hover:text-blue-400 transition-all duration-300 cursor-pointer"
              >
                {item}
              </h1>
            )
          )}

          <div className="flex gap-6 text-dark-blue mt-8 text-sm md:text-base">
            <p className="cursor-pointer ">YouTube</p>
            <p className="cursor-pointer ">Instagram</p>
            <p className="cursor-pointer ">TikTok</p>
          </div>
        </div>

        {/* Right Side (Image Grid) */}
        <div className="flex-1 hidden md:block">
          <img
            src="/images/bentoimg6.png"
            alt="products grid"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};
