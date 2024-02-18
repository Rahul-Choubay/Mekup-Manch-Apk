import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
`;

const OfferCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  flex-basis: calc(33.333% - 20px);
  margin: 10px;
  padding: 20px;
 
  text-align: center;

  &:hover {
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  h2 {
    margin: 0 0 10px;
  }

  p {
    margin: 0;
  }
`;

const OfferCardd = () => (
  <Container>
    <OfferCard style={{ backgroundImage: `url('/homepage1.jpg')`}}>
      <h2>OFFER FOR WOMEN</h2>
      <p>Best Care For Women Skin & Body</p>
      <p>SPA & WELNESS SALON</p>
      <p>Make Your Skin Shine & Glowing</p>
      <button>DISCOVER MORE</button>
      <button>BOOK NOW</button>
    </OfferCard>
    <OfferCard style={{ backgroundImage: `url('/homepage3.jpg')`}}>
      <h2>OFFER FOR MAN</h2>
      <p>Get The Best Glow With Our Man Products</p>
      <button>START NOW</button>
    </OfferCard>
    <OfferCard style={{ backgroundImage: `url('/homepage2.jpg')`}}>
      <h2>OFFER FOR WOMEN</h2>
      <p>Get The Best Care For Couple Massage</p>
      <button>START NOW</button>
    </OfferCard>
  </Container>
);

export default OfferCardd;