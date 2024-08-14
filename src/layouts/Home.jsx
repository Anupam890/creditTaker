import { useState, useEffect } from "react";
import cutm1 from "../assets/cutm1.jpg";
import cutm2 from "../assets/cutm2.jpg";
import cutm3 from "../assets/cutm3.jpg";
import 'animate.css';

const Home = () => {
 
  const slides = [
    {
      src: cutm1,
      alt: "cutm1",
      
    },
    {
      src: cutm2,
      alt: "cutm2",
     
    },
    {
      src: cutm3,
      alt: "cutm3",
      
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="relative w-full h-[500px] mb-4"
        data-twe-carousel-init
        data-twe-ride="carousel"
      >
        {/* Carousel items */}
        <div className="relative w-full h-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`relative float-left w-full h-full transition-transform duration-[600ms] ease-in-out ${
                index === currentSlide ? "block" : "hidden"
              }`}
              data-twe-carousel-item
              data-twe-carousel-active={index === currentSlide ? true : undefined}
            >
              <img
                src={slide.src}
                className="block w-full h-full object-cover"
                alt={slide.alt}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h2 className="text-6xl font-bold mb-4  text-white drop-shadow-md">
                  Welcome to Centurion University
                </h2>
                <p className="text-xl font-bold mb-4 text-white drop-shadow-md">
                  Empowering Future Leaders with Quality Education and Skills
                </p>
                <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="second-section">
        <h3 className="text-center">About Us</h3>
       

        
      </div>
      
    </>
  );
};

export default Home;
