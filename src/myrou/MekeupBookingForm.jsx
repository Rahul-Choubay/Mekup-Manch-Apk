import React, { useState } from 'react';
import './MekeupBookingForm.css'; // Import CSS file for styling


const makeupData = {
    'Bridal Makeup': [
      { type: 'Bridal - HD', price: 15000 },
      { type: 'Bridal Airbrush', price: 25000 },
      { type: 'Bridal Celebrity', price: 18000 },
      { type: 'Bridal HD Makeup by Assistant Artist (Kryolan Products Used)', price: 12000 },
      { type: 'Bridal Ultra HD PLUS', price: 20000 },
    ],
    'Engagement Makeup': [
      { type: 'Engagement HD', price: 12000 },
      { type: 'Engagement Airbrush', price: 15000 },
      { type: 'Engagement Celebrity', price: 18000 },
      { type: 'Engagement HD Makeup by Assistant Artist (Kryolan products are used)', price: 10000 },
      { type: 'Engagement Ultra HD', price: 12000 },
    ],
    'Groom Makeup': [
      { type: 'Groom Airbrush', price: 10000 },
      { type: 'Groom Basic', price: 3000 },
      { type: 'Groom HD', price: 5000 },
    ],
    'Family Makeup': [
      { type: 'Family Makeup Airbrush', price: 4000 },
      { type: 'Family Makeup HD', price: 2500 },
    ],
    'Basic Makeup': [
      { type: 'Bridal Basic', price: 10000 },
      { type: 'Engagement Basic', price: 8000 },
      { type: 'On Request', price: 10000 },
      { type: 'Party Basic', price: 2000 },
    ],
    'Mehendi Makeup': [
      { type: 'Mehendi Makeup HD', price: 8000 },
    ],
    'Reception Makeup': [
      { type: 'Reception Air Brush Makeup', price: 12000 },
      { type: 'Reception HD Makeup', price: 10000 },
    ],
  };
  

  const MekeupBookingForm = () => {
    const [selectedServices, setSelectedServices] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const handleServiceChange = (category, serviceType, price) => {
    const updatedSelectedServices = {
      ...selectedServices,
      [category]: { type: serviceType, price },
    };

    let total = 0;
    for (let category in updatedSelectedServices) {
      total += updatedSelectedServices[category].price;
    }

    setSelectedServices(updatedSelectedServices);
    setTotalPrice(total);
  };

  return (
    <div className="booking-form">
      <h2 className="form-title">Book Your Makeup</h2>
      {Object.keys(makeupData).map((category) => (
        <div key={category} className="category">
          <h3>{category}</h3>
          {makeupData[category].map((service) => (
            <div key={service.type}>
              <label className="service-label">
                <input
                  type="radio"
                  name={category}
                  value={service.type}
                  onChange={() => handleServiceChange(category, service.type, service.price)}
                />
                <span className="service-name">{service.type}</span>
                <span className="service-price">{service.price}</span>
              </label>
            </div>
          ))}
        </div>
      ))}
      <p className="total-price">Total Price: {totalPrice}</p>
      <button type="submit">Book Now</button>
    </div>
  );
};

export default MekeupBookingForm;
