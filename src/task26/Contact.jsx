import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Form Submitted!</h2>
            <p>Name: {form.name}</p>
            <p>Email: {form.email}</p>
            <p>Message: {form.message}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
