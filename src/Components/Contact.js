import React, { useState } from 'react';
import './Contact.css';
import coverImage from '../Assets/11.jpg'; // Adjust the path as per your project structure

const Contact = () => {
  const [formState, setFormState] = useState({
    name: { label: 'Name', value: '', focus: false },
    email: { label: 'Email', value: '', focus: false },
    message: { label: 'Message', value: '', focus: false },
  });

  const handleFocus = (e) => {
    const { name } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], focus: true },
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], focus: false },
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], value },
    }));
  };

  const { name, email, message } = formState;

  return (
    <div className="contact-page">
      <div className="cover-photo">
      <h1 className="cover-title">Kontaktoni ketu</h1>
      <img src={coverImage} alt="Cover" className="cover-image" />

   
      </div>
      <div className="contact-form-container">
        <div className="card">
          <h1>Na kontaktoni</h1>
          <form className="form">
            <div className="text-input">
              <label
                className={(name.focus || name.value !== '') ? 'label-focus' : ''}
                htmlFor="name"
              >
                {name.label}
              </label>
              <input
                type="text"
                name="name"
                value={name.value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>

            <div className="text-input">
              <label
                className={(email.focus || email.value !== '') ? 'label-focus' : ''}
                htmlFor="email"
              >
                {email.label}
              </label>
              <input
                type="text"
                name="email"
                value={email.value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>

            <div className="text-area">
              <label
                className={(message.focus || message.value !== '') ? 'label-focus' : ''}
                htmlFor="message"
              >
                {message.label}
              </label>
              <textarea
                name="message"
                value={message.value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
              />
            </div>

            <button className="button">Dergo</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
