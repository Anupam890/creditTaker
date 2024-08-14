import { useState, useEffect } from "react";
import cutm1 from "../assets/cutm1.jpg";
import cutm2 from "../assets/cutm2.jpg";
import cutm3 from "../assets/cutm3.jpg";
import "animate.css";

const Home = () => {
  const slides = [
    { src: cutm1, alt: "cutm1" },
    { src: cutm2, alt: "cutm2" },
    { src: cutm3, alt: "cutm3" },
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
      {/* Carousel Section */}
      <div
        id="carouselExampleSlidesOnly"
        className="relative w-full h-[500px] mb-4"
        data-twe-carousel-init
        data-twe-ride="carousel"
      >
        <div className="relative w-full h-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`relative float-left w-full h-full transition-transform duration-[600ms] ease-in-out ${
                index === currentSlide ? "block" : "hidden"
              }`}
              data-twe-carousel-item
              data-twe-carousel-active={
                index === currentSlide ? true : undefined
              }
            >
              <img
                src={slide.src}
                className="block w-full h-full object-cover"
                alt={slide.alt}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <h2 className="text-6xl font-bold mb-4 text-white drop-shadow-md">
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

      {/* About Us Section */}
      <div className="second-section py-10 bg-gray-100 overflow-hidden">
        <h3 className="text-4xl text-center font-bold mb-10">About Us</h3>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10 px-4">
          <div className="img-container animate__animated animate__fadeInLeft">
            <img
              src={cutm1}
              alt="About Centurion University"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="text-info p-4 animate__animated animate__fadeInRight" >
            <h2 className="text-3xl font-bold mb-4">Centurion University</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
            </p>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          <div className="text-info p-4">
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              erat ac neque malesuada placerat. Sed vel purus vel massa
              consectetur bibendum vel id turpis. Sed vel purus vel massa
              consectetur bibendum vel id turpis.
            </p>
          </div>
          <div className="img-container">
            <img
              src={cutm2}
              alt="Vision"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
