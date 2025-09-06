import React, { useState, useRef } from "react";
import "./Task23.css"; // We'll create CSS separately

function Task23() {
  // Carousel items
  const carouselItems = [
    { title: "Slide 1", description: "This is slide 1" },
    { title: "Slide 2", description: "This is slide 2" },
    { title: "Slide 3", description: "This is slide 3" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % carouselItems.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + carouselItems.length) % carouselItems.length);

  // Accordion state
  const [openAccordion, setOpenAccordion] = useState(null);

  // Controlled Form
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validate = () => {
    let temp = {};
    temp.name = formData.name ? "" : "Name is required";
    temp.email = /^\S+@\S+\.\S+$/.test(formData.email) ? "" : "Email is invalid";
    setErrors(temp);
    return Object.values(temp).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert(`Controlled Form Submitted: ${JSON.stringify(formData)}`);
  };

  // Uncontrolled input
  const uncontrolledRef = useRef();
  const handleUncontrolled = () => alert(`Uncontrolled Input: ${uncontrolledRef.current.value}`);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Task 23: React UI Practice</h1>
      </header>

      <main className="container">
        {/* Carousel */}
        <section className="carousel">
          <h2>Carousel</h2>
          <div className="carousel-slide">
            <button onClick={prevSlide}>&lt;</button>
            <div className="carousel-content">
              <h3>{carouselItems[currentSlide].title}</h3>
              <p>{carouselItems[currentSlide].description}</p>
            </div>
            <button onClick={nextSlide}>&gt;</button>
          </div>
        </section>

        {/* Cards */}
        <section className="cards">
          <h2>Cards</h2>
          <div className="card-container">
            {[1, 2, 3].map(i => (
              <div key={i} className="card">
                <h3>Card {i}</h3>
                <p>This is card {i} content.</p>
                <button>Action</button>
              </div>
            ))}
          </div>
        </section>

        {/* Accordion */}
        <section className="accordion">
          <h2>Accordion</h2>
          {[1, 2].map(i => (
            <div key={i} className="accordion-item">
              <div className="accordion-header" onClick={() => setOpenAccordion(openAccordion === i ? null : i)}>
                Accordion {i}
              </div>
              {openAccordion === i && (
                <div className="accordion-body">This is the detail of accordion {i}.</div>
              )}
            </div>
          ))}
        </section>

        {/* Controlled Form */}
        <section className="form-section">
          <h2>Controlled Form</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <button type="submit">Submit</button>
          </form>
        </section>

        {/* Uncontrolled Input */}
        <section className="form-section">
          <h2>Uncontrolled Input</h2>
          <input type="text" placeholder="Enter something" ref={uncontrolledRef} />
          <button onClick={handleUncontrolled}>Submit</button>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 Footer
      </footer>
    </div>
  );
}

export default Task23;
