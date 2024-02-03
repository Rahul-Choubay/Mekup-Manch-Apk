// StudentSignUp.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const StudentSignUp = () => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/Dashboard');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const collectData = async () => {
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('dateOfBirth', dateOfBirth);

      const result = await fetch("http://localhost:6600/registerstudent", {
        method: 'post',
        body: formData,
      });

      const data = await result.json();

      if (data.username && data.email && data.password) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate('/Dashboard');
      }
    } catch (error) {
      alert("Please enter correct details");
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '60%' }}>
      {!showForm ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <h2 style={{ justifyContent: 'center', textAlign: 'center' }}>Student Sign Up</h2>
          <input style={{ height: '6vh', marginBottom: '0.4rem' }} type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
  
          <button style={{ height: '6vh', marginTop: '1rem' }} type="submit">Next</button>
        </form>
      ) : (
        <form style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <h2 style={{ justifyContent: 'center', textAlign: 'center' }}>Student Sign Up</h2>
          <input style={{ height: '6vh', marginBottom: '0.4rem' }} value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Name" />
          <input style={{ height: '6vh', marginBottom: '0.4rem' }} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          <input style={{ height: '6vh', marginBottom: '0.4rem' }} value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <button style={{ height: '6vh', marginTop: '1rem' }} onClick={collectData} type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
};

export default StudentSignUp;
