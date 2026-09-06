import React, { useState } from "react";
import "./FeedbackForm.css"; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const confirmationMessage = `
    Nome: ${formData.name}
    Email: ${formData.email}
    Rating: ${formData.rating}
    Feedback: ${formData.feedback}
    `;

    const isConfirmed = window.confirm(
      `Por favor, confirme seus dados: \n\n${confirmationMessage}`,
    );
    if (isConfirmed) {
      console.log("Submetendo feedback:", formData);
      setFormData({
        name: "",
        email: "",
        feedback: "",
        rating: "",
      });
      alert("Obrigado pelo seu feedback!");
    }
  };

  return (
    <>
      <nav>Diga-nos o que você pensa</nav>
      <form className="feedback-form">
        <h2>Adoraríamos ouvir de você!</h2>
        <p>Por favor, compartilhe seus comentários conosco.</p>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Seu Nome"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Seu Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          id="feedback"
          placeholder="Seu Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <span>Nos Avalie:</span>
        <div className="rating-container">
          <p>
            <input
              type="radio"
              name="rating"
              id="rating"
              value="1"
              onChange={handleChange}
            />{" "}
            1
          </p>
          <p>
            <input
              type="radio"
              name="rating"
              id="rating"
              value="2"
              onChange={handleChange}
            />{" "}
            2
          </p>
          <p>
            <input
              type="radio"
              name="rating"
              id="rating"
              value="3"
              onChange={handleChange}
            />{" "}
            3
          </p>
          <p>
            <input
              type="radio"
              name="rating"
              id="rating"
              value="4"
              onChange={handleChange}
            />{" "}
            4
          </p>
          <p>
            <input
              type="radio"
              name="rating"
              id="rating"
              value="5"
              onChange={handleChange}
            />{" "}
            5
          </p>
        </div>
        <button type="submit" onClick={handleSubmit}>
          Enviar Feedback
        </button>
      </form>
    </>
  );
};

export default FeedbackForm;
