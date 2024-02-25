import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 390;
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
    height: 35vh;
    border-radius: 6px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background-color: White;
    opacity: 0;
    transition: opacity 0.3s, background-color 0.3s; /* Added background-color transition */
    .white {
      color:black;
      justify-items: center;
      align-item: center;
      p{
        margin-left: 20%;
        width: 60%;
        font-size: 1.2rem;
      }
    }
    .black{
      color:black;
      justify-items: center;
      align-item: center;
      p{
        margin-left: 20%;
        width: 60%;
        font-size: 1.2rem;
      }

    }
  }

  &:nth-child(1):hover .overlay,
  &:nth-child(6):hover .overlay,
  &:nth-child(8):hover .overlay,
  &:nth-child(3):hover .overlay {
    opacity: 1.9; /* Overlay opacity on hover for second and third images */
    color: black;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 1.3); 
    font-size: 1.2rem;
  }

  &:nth-child(2) .overlay {
    opacity: 1.9; /* Initial overlay opacity for first image */
    box-shadow: 0 3px 3px rgba(0, 0, 0, 1.3); /* Add a subtle shadow */
  }

  &:nth-child(2):hover .overlay {
    opacity: 0.1;
  }
  &:nth-child(4) .overlay {
    opacity: 1.9; /* Initial overlay opacity for first image */
    box-shadow: 0 3px 3px rgba(0, 0, 0, 1.3); /* Add a subtle shadow */
  }

  &:nth-child(4):hover .overlay {
    opacity: 0.1;
  }
  &:nth-child(7) .overlay {
    opacity: 1.9; /* Initial overlay opacity for first image */
    box-shadow: 0 3px 3px rgba(0, 0, 0, 1.3); /* Add a subtle shadow */
  }

  &:nth-child(7):hover .overlay {
    opacity: 0.1;
  }
  &:nth-child(5) .overlay {
    opacity: 1.9; /* Initial overlay opacity for first image */
    box-shadow: 0 3px 3px rgba(0, 0, 0, 1.3); /* Add a subtle shadow */
  }

  &:nth-child(5):hover .overlay {
    opacity: 0.1;
  }

  &:nth-child(1):hover img,
  &:nth-child(6):hover img,
  &:nth-child(8):hover img,
  &:nth-child(3):hover img {
    filter: brightness(
      0
    ); /* Adjust brightness on hover for the second and third images */
  }
`;

const PortfolioPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Title>See Our Portfolio</Title>
      <PortfolioGrid>
        <PortfolioItem>
          <img src="nail.jpg" alt="Portfolio Item 1" />
          <div className="overlay">
            <div className="white">
              <p>7 UNKNOWN FACTS YOU MUST KNOW ABOUT NAIL EXTENSIONS</p>
              <Link>Read More</Link>
            </div>
          </div>
        </PortfolioItem>
        <PortfolioItem>
          <img src="mehndi.jpg" alt="Portfolio Item 2" />
          <div className="overlay">
            <div className="black">
              <p> 10 QUIRKY (AND UNCONVENTIONAL!) BRIDAL ENTRY IDEAS!</p>
              <Link>Read More</Link>
            </div>
          </div>
        </PortfolioItem>
        <PortfolioItem>
          <img src="haldi.jpg" alt="Portfolio Item 3" />
          <div className="overlay">
            <div className="white">
              {" "}
              <p>
                BRIDE TO BE? DON’T FORGET TO READ THESE ESSENTIAL BEAUTY TIPS!
              </p>
              <Link>Read More</Link>
            </div>
          </div>
        </PortfolioItem>
        <PortfolioItem>
          <img src="grrombride.jpg" alt="Portfolio Item 4" />
          <div className="overlay">
            <div className="black">
              {" "}
              <p>
                {" "}
                BRIDAL BEAUTY GUIDE: HOW TO GET FLAWLESS SKIN BEFORE AND AFTER
                WEDDING!
              </p>
              <Link>Read More</Link>
            </div>
          </div>
        </PortfolioItem>
        <PortfolioItem>
          <img src="facemakeup.jpg" alt="Portfolio Item 5" />
          <div className="overlay">
            <div className="black">
              {" "}
              <p>10 PRE-WEDDING FACE MASKS FOR ALL BRIDAL SKIN TYPES!</p>
              <Link>Read More</Link>
            </div>
          </div>
        </PortfolioItem>
        <PortfolioItem>
          <img src="diwali.jpg" alt="Portfolio Item 6" />
          <div className="overlay">
            <div className="white">
              {" "}
              <p>
                TOP 5 MAKEUP ARTISTS WHO CAN BRING OUT THE *BOMBSHELL* IN YOU
                THIS DIWALI!
              </p>
              <Link>Read More</Link>
            </div>
          </div>
        </PortfolioItem>
        <PortfolioItem>
          <img src="bodypolice.jpg" alt="Portfolio Item 7" />
          <div className="overlay">
            <div className="black">
              {" "}
              <p>TOP 5 SALONS FOR BODY POLISHING IN DELHI NCR</p>
              <Link>Read More</Link>
            </div>
          </div>
        </PortfolioItem>
        <PortfolioItem>
          <img src="groomimg.jpg" alt="Portfolio Item 8" />
          <div className="overlay">
            <div className="white">
              {" "}
              <p>
                BRIDEGROOM, TO BE! DON’T FORGET TO READ THESE ESSENTIAL GROOMING
                TIPS!
              </p>
              <Link>Read More</Link>
            </div>
          </div>
        </PortfolioItem>
      </PortfolioGrid>
    </div>
  );
};

export default PortfolioPage;
