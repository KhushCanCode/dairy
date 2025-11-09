import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

export const Navbar = ({ onOpenFranchiseModal, onOpenMailUsModal }) => {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const imageRef = useRef(null);
  const imageRef2 = useRef(null);
  const menuItemsRef = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Map menu items to images
  const menuImages = {
    "Home": "/images/bentoimg1.png",
    "Products": "/images/bentoimg2.png",
    "Experience": "/images/bentoimg3.png",
    "Franchise": "/images/bentoimg6.png",
    "Mail Us": "/images/bentoimg4.png",
  };

  // Default image when no item is hovered
  const defaultImage = "/images/bentoimg6.png";

  // Handle menu item clicks
  const handleMenuClick = (item) => {
    setMenuOpen(false); // Close menu
    
    // Close menu animation
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
        pointerEvents: "none",
      });
    }

    // Handle different menu items
    switch (item) {
      case "Home":
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "Franchise":
        // Open franchise modal
        if (onOpenFranchiseModal) {
          onOpenFranchiseModal();
        }
        break;
      case "Products":
        navigate("/");
        setTimeout(() => {
          const productsSection = document.querySelector(".product-section");
          if (productsSection) {
            productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
        break;
      case "Experience":
        navigate("/");
        setTimeout(() => {
          const processSection = document.querySelector(".process-section");
          if (processSection) {
            processSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
        break;
      case "Mail Us":
        // Open Mail Us modal
        if (onOpenMailUsModal) {
          onOpenMailUsModal();
        }
        break;
      default:
        navigate("/");
        break;
    }
  };


  // Animate dropdown and menu items
  useEffect(() => {
    if (menuRef.current) {
      if (menuOpen) {
        // Animate menu container
        gsap.to(menuRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          pointerEvents: "auto",
        });

        // Animate menu items with stagger
        gsap.fromTo(
          menuItemsRef.current,
          {
            x: -50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            delay: 0.2,
          }
        );

        // Animate image container
        if (imageRef.current) {
          gsap.fromTo(
            imageRef.current.parentElement,
            {
              x: 100,
              opacity: 0,
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              delay: 0.3,
            }
          );
        }
      } else {
        // Reset menu items
        gsap.to(menuItemsRef.current, {
          x: -50,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });

        // Animate menu container out
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

  // Animate image change on hover with smooth crossfade
  useEffect(() => {
    if (menuOpen && imageRef.current && imageRef2.current) {
      const imageSrc = hoveredItem ? menuImages[hoveredItem] : defaultImage;
      const currentImg = currentImageIndex === 0 ? imageRef.current : imageRef2.current;
      const nextImg = currentImageIndex === 0 ? imageRef2.current : imageRef.current;
      
      // Check if we need to change the image (compare paths, not full URLs)
      const currentSrc = currentImg.src.split('/').pop();
      const newSrc = imageSrc.split('/').pop();
      if (currentSrc !== newSrc && nextImg) {
        // Preload the new image first
        const img = new Image();
        img.onload = () => {
          // Set the new image source
          nextImg.src = imageSrc;
          
          // Reset next image position and make it visible
          gsap.set(nextImg, {
            opacity: 0,
            scale: 1.05,
            zIndex: 1,
          });
          
          // Fade out current image
          gsap.to(currentImg, {
            opacity: 0,
            scale: 0.95,
            duration: 0.5,
            ease: "power2.inOut",
          });
          
          // Fade in next image simultaneously for smooth crossfade
          gsap.to(nextImg, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.05,
            onComplete: () => {
              // Switch which image is active
              gsap.set(currentImg, { zIndex: 0 });
              gsap.set(nextImg, { zIndex: 2 });
              setCurrentImageIndex(currentImageIndex === 0 ? 1 : 0);
            },
          });
        };
        img.onerror = () => {
          console.warn("Failed to load image:", imageSrc);
        };
        img.src = imageSrc;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoveredItem, menuOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full top-0 left-0 z-50 py-4 px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="cursor-pointer" 
          onClick={() => {
            setMenuOpen(false);
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img 
            src="/images/Dairy power logo.png" 
            alt="logo" 
            className="w-14 md:w-16" 
          />
        </div>

        {/* Animated Hamburger Menu Icon */}
        <button
          className={`animated-hamburger-menu ${menuOpen ? 'hamburger-open' : ''} cursor-pointer w-10 h-10 md:w-12 md:h-12 flex flex-col justify-center items-center gap-1.5 focus:outline-none`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${menuOpen ? 'hamburger-open-line-1' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'hamburger-open-line-2' : ''}`}></span>
          <span className={`hamburger-line ${menuOpen ? 'hamburger-open-line-3' : ''}`}></span>
        </button>
      </nav>

      {/* Dropdown Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-milk via-milk to-milk/95 z-40 opacity-0 -translate-y-full flex flex-col md:flex-row overflow-hidden"
      >
        {/* Left Side (Links) */}
        <div className="flex flex-col justify-center items-center md:items-start flex-1 px-8 md:px-16 lg:px-20 gap-6 md:gap-8 text-center md:text-left relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-dark-blue/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-dark-blue/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 w-full">
            {["Home", "Products", "Experience", "Franchise", "Mail Us"].map(
              (item, i) => (
                <div
                  key={i}
                  ref={(el) => (menuItemsRef.current[i] = el)}
                  className="relative group"
                >
                  <h1
                    onClick={() => handleMenuClick(item)}
                    onMouseEnter={() => setHoveredItem(item)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="text-4xl md:text-5xl lg:text-7xl font-anton text-dark-blue tracking-tight cursor-pointer transition-all duration-500 relative z-10 hover:translate-x-4 hover:text-blue-500"
                    style={{
                      textShadow: hoveredItem === item 
                        ? "0 0 30px rgba(37, 99, 235, 0.3)" 
                        : "none",
                    }}
                  >
                    <span className="relative inline-block">
                      {item}
                      {/* Underline animation */}
                      <span
                        className={`absolute bottom-0 left-0 h-1 bg-dark-blue transition-all duration-500 ${
                          hoveredItem === item ? "w-full" : "w-0"
                        }`}
                        style={{
                          background: hoveredItem === item
                            ? "linear-gradient(90deg, #025da7, #3b82f6)"
                            : "#025da7",
                        }}
                      ></span>
                    </span>
                  </h1>
                  
                  {/* Hover indicator */}
                  <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-dark-blue transition-all duration-500 ${
                      hoveredItem === item
                        ? "opacity-100 scale-150 -translate-x-8"
                        : "opacity-0 scale-0 -translate-x-4"
                    }`}
                  ></div>
                </div>
              )
            )}
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 sm:gap-6 mt-8 md:mt-12 relative z-10">
            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCsKmSDr1xeazwpEijUipSqA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-blue/10 hover:bg-dark-blue/20 border border-dark-blue/30 hover:border-dark-blue/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-dark-blue group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dairypowerltd/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-blue/10 hover:bg-dark-blue/20 border border-dark-blue/30 hover:border-dark-blue/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-dark-blue group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/dairypowerindia/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-dark-blue/10 hover:bg-dark-blue/20 border border-dark-blue/30 hover:border-dark-blue/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-dark-blue group-hover:text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side (Image Display) */}
        <div className="flex-1 hidden md:block relative overflow-hidden bg-gradient-to-br from-dark-blue/5 to-dark-blue/10">
          {/* Image Container with proper sizing for quality */}
          <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
            <div className="relative w-full h-full max-w-2xl max-h-[80vh] rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              {/* First Image Layer */}
              <img
                ref={imageRef}
                src={defaultImage}
                alt="menu preview"
                className="absolute inset-0 w-full h-full object-contain"
                style={{
                  imageRendering: "auto",
                  zIndex: currentImageIndex === 0 ? 2 : 0,
                  transition: "opacity 0.1s ease-out",
                }}
              />
              
              {/* Second Image Layer for smooth crossfade */}
              <img
                ref={imageRef2}
                src={defaultImage}
                alt="menu preview"
                className="absolute inset-0 w-full h-full object-contain"
                style={{
                  imageRendering: "auto",
                  zIndex: currentImageIndex === 1 ? 2 : 0,
                  transition: "opacity 0.1s ease-out",
                }}
              />
              
              {/* Animated overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/20 via-transparent to-transparent pointer-events-none z-10"></div>
              
              {/* Shimmer effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none transition-all duration-1000 z-10 ${
                  hoveredItem ? "opacity-100 translate-x-full" : "opacity-0 -translate-x-full"
                }`}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                }}
              ></div>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-dark-blue/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
    </>
  );
};
