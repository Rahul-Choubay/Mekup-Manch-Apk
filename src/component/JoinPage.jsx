import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
function JoinPage() {
  return (
    <Div>
    <div className="home-page">
      <div>
      <img src='/sale-badge.png' alt='' />
      </div>
    
     <div className='con'>
      <h2>Book Your Appointment Now And Get 25% Off</h2>
      <p>Awesome Monsoon Sale - 25% OFF On All Professional Make Up From Only $59</p>
     </div >
     <div className='btn'>
     <button> Book An Appointment</button>
     </div>
    
    </div>
    </Div>
  );
}
const Div = styled.div`
.home-page {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  background-color:#08acf2;
  img{
    width: 52%;
  }
.con{
  justify-content:center;
  align-item: center;
  color:white;
  p{
    font-size: 1rem;
    font-weight: 360;
  }
  h2{
    font-size: 1.5rem;
    font-weight: 560;
  }


}
.btn{
  width: 30%;
  display:flex;
  justify-content:center;
  align-item: center;

  button {
    margin-top: 3rem;
    width: 18vw;
    height: 7vh;
    color: white;
    background-color: transparent;
    border-radius: 9px;
    border: 2px solid transparent;
    transition: background-color 0.3s, box-shadow 0.3s; /* Add box-shadow to the transition */
    box-shadow: 0 6px 8px rgba(0, 0, 0, 1.3); /* Add a subtle shadow */
  }
  button:hover {
    color: black;
    background-color: pink;
  }
  
}

}

`;
export default JoinPage;