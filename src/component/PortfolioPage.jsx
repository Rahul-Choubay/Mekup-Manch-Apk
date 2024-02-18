import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 90vw;
  grid-gap: 1rem;
  justify-items: center; /* Center items horizontally */
`;

const PortfolioItem = styled.div`
  position: relative; /* Required for absolute positioning of overlay */
  padding: 0rem;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  width: calc(100.33% - 0.2rem); /* Adjusted to fit the gap */

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    height: auto;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: red;
    opacity: 0;
    transition: opacity 0.3s, background-color 0.3s; /* Added background-color transition */
  }

  &:nth-child(1):hover .overlay,
  &:nth-child(3):hover .overlay {
    opacity: 0.5; /* Overlay opacity on hover for second and third images */
    background-color: transparent; /* Remove background color on hover */
  }

  &:nth-child(2) .overlay {
    opacity: 0.7; /* Initial overlay opacity for first image */
  }

  &:nth-child(2):hover .overlay {
    opacity: 0.1;
  }
  &:nth-child(4) .overlay {
    opacity: 0.7; /* Initial overlay opacity for first image */
  }

  &:nth-child(4):hover .overlay {
    opacity: 0.1;
  }
  &:nth-child(7) .overlay {
    opacity: 0.7; /* Initial overlay opacity for first image */
  }

  &:nth-child(7):hover .overlay {
    opacity: 0.1;
  }
  &:nth-child(5) .overlay {
    opacity: 0.7; /* Initial overlay opacity for first image */
  }

  &:nth-child(5):hover .overlay {
    opacity: 0.1;
  }

  &:nth-child(1):hover img,
  &:nth-child(3):hover img {
    filter: brightness(0.1); /* Adjust brightness on hover for the second and third images */
  }
`;

const PortfolioPage = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center", alignItems:"center"}}>
      <Title>See Our Portfolio</Title>
      <PortfolioGrid>
        <PortfolioItem>
          <img src="protfolio (3).png" alt="Portfolio Item 1" />
          <div className="overlay"></div>
        </PortfolioItem>
        <PortfolioItem>
          <img src="protfolio (2).png" alt="Portfolio Item 2" />
          <div className="overlay"> </div>
        </PortfolioItem>
        <PortfolioItem>
          <img src="protfolio (1).png" alt="Portfolio Item 3" />
          <div className="overlay"></div>
        </PortfolioItem>
        <PortfolioItem>
          <img src="protfolio (4).png" alt="Portfolio Item 4" />
          <div className="overlay"></div>
        </PortfolioItem>
        <PortfolioItem>
          <img src="protfolio (5).png" alt="Portfolio Item 5" />
          <div className="overlay"></div>
        </PortfolioItem>
        <PortfolioItem>
          <img src="protfolio (6).png" alt="Portfolio Item 6" />
          <div className="overlay"></div>
        </PortfolioItem>
        <PortfolioItem>
          <img src="protfolio (6).png" alt="Portfolio Item 6" />
          <div className="overlay"></div>
        </PortfolioItem>
        <PortfolioItem>
          <img src="protfolio (6).png" alt="Portfolio Item 6" />
          <div className="overlay"></div>
        </PortfolioItem>
      </PortfolioGrid>
    </div>
  );
};

export default PortfolioPage;
