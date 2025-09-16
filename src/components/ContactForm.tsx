import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message!');
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Me</h2>
      {submitted ? (
        <p className="success">✅ Thank you for your message! I’ll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"><b>Name:</b></label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"><b>Email:</b></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message"><b>Message:</b></label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      )}

      {/* Inline CSS */}
      <style>{`
        .contact-form {
          max-width: 500px;
          margin: 40px auto;
          padding: 25px;
          background: #f9f9f9;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
          font-family: Arial, sans-serif;
        }

        .contact-form h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        .form-group {
          margin-bottom: 15px;
        }

        label {
          display: block;
          margin-bottom: 6px;
          font-weight: bold;
          color: #444;
        }

        input, textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 14px;
        }

        textarea {
          min-height: 100px;
          resize: vertical;
        }

        .btn-submit {
          width: 100%;
          padding: 12px;
          background: #28a745;
          color: white;
          border: none;
          font-size: 16px;
          font-weight: bold;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .btn-submit:hover {
          background: #218838;
        }

        .success {
          text-align: center;
          font-size: 16px;
          color: green;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;