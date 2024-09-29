import React, { useState, useEffect } from "react";
import { slides } from "../constant";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle automatic sliding
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []); // Run only once when component mounts

  return (
    <section
      id="Home"
      className="lg:padding-l wide:padding-r padding-r pt-8 w-full max-container flex justify-center h-[90vh]"
    >
      <div className="carousel w-full  relative overflow-hidden  ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-item absolute p-2 h-[500px]   top-0 left-full w-full transform transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? "left-0" : "left-full"
            }`}
            style={{ zIndex: index === currentSlide ? 1 : 0 }}
          >
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full object-fill object-center  "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
