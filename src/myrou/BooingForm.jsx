import React, { useState } from 'react';
import './BookingForm.css'; // Import your CSS file for styling

const BookingForm = () => {
  const [formData, setFormData] = useState({
    team: '',
    name: '',
    city: '',
    phone: '',
    email: '',
    date: '',
    numPersons: '',
    budget: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('"http://localhost:6700/submit-form"', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      // Optionally, you can show a success message or redirect the user after form submission
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="booking-form">
      <h2>Family Makeup Services</h2>
      <p>Looking for a makeup service</p>
      <form onSubmit={handleSubmit}>
        <label>
          Team (Bride/Groom):
          <input
            type="text"
            name="team"
            value={formData.team}
            onChange={handleChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Function Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <label>
          Number of Persons:
          <input
            type="number"
            name="numPersons"
            value={formData.numPersons}
            onChange={handleChange}
          />
        </label>
        <label>
          Preferred Budget per Person:
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          >
            <option value="">Select Budget Range</option>
            <option value="3000-4000">3000-4000</option>
            <option value="4000-6000">4000-6000</option>
            <option value="6000-8000">6000-8000</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
