// StudentSignUp.jsx

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ServiceAndPricing from '../component/ServiceAndPricing'; // Import the new component

const StudentSignUp = () => {
  const [step, setStep] = useState(1);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");
  const [bridalMakeup, setBridalMakeup] = useState(false);
  const [airbrush, setAirbrush] = useState(false);
  const [engagementMakeup, setEngagementMakeup] = useState(false);
  const [priceBridalMakeup, setPriceBridalMakeup] = useState("");
  const [priceEngagementMakeup, setPriceEngagementMakeup] = useState("");
  const [advancePayment, setAdvancePayment] = useState("");
  const [afterWorkPayment, setAfterWorkPayment] = useState("");
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [productsUsed, setProductsUsed] = useState([]);
  const [bridalHD, setBridalHD] = useState(false);
  const [bridalAirbrush, setBridalAirbrush] = useState(false);
  const [bridalCelebrity, setBridalCelebrity] = useState(false);
  const [bridalSignature, setBridalSignature] = useState(false);
 
  const [engagementHD, setEngagementHD] = useState(false);
  const [engagementAirbrush, setEngagementAirbrush] = useState(false);
  const [engagementCelebrity, setEngagementCelebrity] = useState(false);
  const [engagementSignature, setEngagementSignature] = useState(false);

  const [priceGroomMakeup, setPriceGroomMakeup] = useState("");
  const [groomMakeups, setGroomMakeups] = useState(false);
  const [groomMakeup, setGroomMakeup] = useState(false);
  const [groomBasic, setGroomBasic] = useState(false);
  const [groomHD, setGroomHD] = useState(false);

  const [priceFamilyMakeup, setPriceFamilyMakeup] = useState("");
  const [familyMakeups, setFamilyMakeups] = useState(false);
  const [familyMakeup, setFamilyMakeup] = useState(false);
  const [familyMakeupAirbrush, setFamilyMakeupAirbrush] = useState(false);
  const [familyMakeupHD, setFamilyMakeupHD] = useState(false);
const [profileImage, setProfileImage] =("");

  const navigate = useNavigate();

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handlePaymentMethod = (method) => {
    if (paymentMethods.includes(method)) {
      setPaymentMethods(paymentMethods.filter((m) => m !== method));
    } else {
      setPaymentMethods([...paymentMethods, method]);
    }
  };

  const collectData = async () => {
    try {
      const result = await fetch("http://localhost:6700/registerstudent", {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          dateOfBirth,
          state,
          city,
          bio,
          services: {
            bridalMakeup,
            airbrush,
            engagementMakeup,
            priceBridalMakeup,
            priceEngagementMakeup,
            bridalHD,
            bridalAirbrush,
            bridalCelebrity,
            bridalSignature,
            engagementHD,
            engagementAirbrush,
            engagementCelebrity,
            engagementSignature,
            priceGroomMakeup,
            groomMakeups,
            groomMakeup,
            groomBasic,
            groomHD,
            familyMakeups,
            priceFamilyMakeup,
            familyMakeup,
            familyMakeupAirbrush,
            familyMakeupHD,
          },
          paymentDetails: {
            advancePayment,
            afterWorkPayment,
            paymentMethods,
          },
          productsUsed,
          profileImage,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await result.json();
      console.warn(data);
      if (data.username && data.email) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate('/Dashboard');
      }
    } catch (error) {
      alert("Please enter correct details");
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <h2 style={{ justifyContent: "center" }}>Student Sign Up - Step 1</h2>
            <div style={{ width: "36vw", display: "flex", flexWrap: 'wrap' }}>
              <input style={{ width: "12vw", height: "6vh", marginLeft: "1rem" }} type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
              <input style={{ width: "12vw", height: "6vh", marginLeft: "1rem" }} value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
              <input style={{ width: "12vw", height: "6vh", marginLeft: "1rem" }} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />

              <input style={{ width: "12vw", height: "6vh", marginLeft: "1rem" }} value={state} onChange={(e) => setState(e.target.value)} type="text" placeholder="State" />
              <input style={{ width: "12vw", height: "6vh", marginLeft: "1rem" }} value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder="City" />
              <textarea style={{ width: "12vw", height: "6vh", marginLeft: "1rem" }} value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio" />
              <input style={{ width: "12vw", height: "6vh", marginLeft: "1rem" }} type="file" onChange={(e) => setProfileImage(e.target.value)} />
  
            </div>
            <div style={{ width: "36vw", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
              <button style={{ width: "12vw", height: "6vh", marginRight: "6rem", marginTop: "1rem" }} onClick={nextStep}>Next</button>
            </div>
          </div>
        );

      case 2:
        return (
          <ServiceAndPricing
            bridalMakeup={bridalMakeup}
            airbrush={airbrush}
            engagementMakeup={engagementMakeup}
            priceBridalMakeup={priceBridalMakeup}
            priceEngagementMakeup={priceEngagementMakeup}
            setBridalMakeup={setBridalMakeup}
            setAirbrush={setAirbrush}
            setPriceBridalMakeup={setPriceBridalMakeup}
            setEngagementMakeup={setEngagementMakeup}
            setPriceEngagementMakeup={setPriceEngagementMakeup}
            setBridalHD={setBridalHD}
setBridalSignature={setBridalSignature}
setBridalAirbrush={setBridalAirbrush}
setBridalCelebrity={setBridalCelebrity}
setEngagementHD={setEngagementHD}
setEngagementAirbrush={setEngagementAirbrush}
setEngagementCelebrity={setEngagementCelebrity}
setEngagementSignature={setEngagementSignature}
setPriceGroomMakeup ={setPriceGroomMakeup}
setGroomBasic={setGroomBasic}
setGroomMakeup={setGroomMakeup}
setGroomMakeups={setGroomMakeups}
setGroomHD={setGroomHD}
setFamilyMakeup={setFamilyMakeup}
setFamilyMakeupAirbrush={setFamilyMakeupAirbrush}
setFamilyMakeupHD={setFamilyMakeupHD}
setFamilyMakeups={setFamilyMakeups}
            nextStep={nextStep}
          />
        );
        
       

      case 3:
        return (
          <div>
            <h2>Student Sign Up - Step 3</h2>
            <h3>Artist Details & Payment Details</h3>
            <h3>Payment Policy</h3>
            <label>
              Advance Payment
              <input value={advancePayment} onChange={(e) => setAdvancePayment(e.target.value)} type="text" placeholder="Advance Payment" />
            </label>
            <label>
              After Work Payment
              <input value={afterWorkPayment} onChange={(e) => setAfterWorkPayment(e.target.value)} type="text" placeholder="After Work Payment" />
            </label>
            <h3>Payment Method</h3>
            <label>
              Cash
              <input type="checkbox" onChange={() => handlePaymentMethod("Cash")} />
            </label>
            <label>
              Online
              <input type="checkbox" onChange={() => handlePaymentMethod("Online")} />
            </label>

            <button onClick={nextStep}>Next</button>
          </div>
        );

      case 4:
        return (
          <div>
            <h2>Student Sign Up - Step 4</h2>
            <h3>Product Used</h3>
            <input value={productsUsed} onChange={(e) => setProductsUsed(e.target.value)} type="text" placeholder="Add product used" />
            <button onClick={collectData}>Sign Up</button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '60%' }}>
      {renderStep()}
      {step > 1 && <button onClick={prevStep}>Previous</button>}
    </div>
  );
};

export default StudentSignUp;

