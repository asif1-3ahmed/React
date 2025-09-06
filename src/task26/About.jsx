import React, { useState, useEffect } from "react";

function About() {
  const slides = [
    "https://via.placeholder.com/600x200?text=Slide+1",
    "https://via.placeholder.com/600x200?text=Slide+2",
    "https://via.placeholder.com/600x200?text=Slide+3",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-container">
      <h1>About Us</h1>
      <div className="carousel">
        <img src={slides[current]} alt={`Slide ${current}`} />
      </div>
      <h2>Our Team</h2>
      <p>We are a passionate team building amazing React apps!</p>
    </div>
  );
}

export default About;
