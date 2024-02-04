import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const moveLeftToRight = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const Homepage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const images = ["artist (3).jpeg","artist (7).jpeg", "artist (5).jpeg","artist (4).jpeg",];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setAnimationKey((prevKey) => prevKey + 1);
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Div>
      <div className="maindiv">
        <div className="divmain">
          <div className="img" style={{width:"38vw", height:"80vh"}}>
            <AnimatedImage
              key={animationKey}
              src={images[currentImageIndex]}
              alt="Description"
              style={{width:"100%", height:"90vh" }}
            />
          </div>
          <div className="Contentdiv">
            <div>
              <h2>For every Bride, every Groom, every Beauty Parlor Real results..</h2>
              <p>We’re on a mission to provide world-class makeup for anyone, anywhere.</p>
              <div className="btndiv" style={{ display: "flex", flexDirection: "row" }}>
                <button className="butt" style={{ justifyContent: "center", textAlign: "center" }}>
                  <Link to="/signup" style={{ color: "white", textDecoration: "none", textAlign: "center", alignItems: "center" }}>Client</Link>
                </button>
                <button className="butt" style={{ justifyContent: "center", textAlign: "center" }}>
                  <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>Artist</Link>
                </button>
                <button className="butt" style={{ justifyContent: "center", textAlign: "center" }}>
                  <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>Beauty Parlour</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: row;
  overflow:hidden;
  width: 97vw;
  height:100vh;

  .maindiv {
    display: flex;
    flex-direction: row;
    width: 97%;

    .divmain {
      display: flex;
      align-items: center; /* Added to vertically center the img and Contentdiv */
      .img {
        width: 40%;
        height: auto; 
       margin-left: 2rem;
        img{
            width: 100%;
        }
      }

      .Contentdiv {
        width: 60%; 
        padding-left: 20px; 
        .btndiv{
          width:100%;
        .butt{
            background-color: #1865f2;
            border:none;
            width: 9vw;
            height:6.5vh;
        
            border-radius:10px;
            margin-left:1rem;
Link{
  color:white;
}
        }
      }
      }
    }
  }
`;
const AnimatedImage = styled.img`
  width: 100%;
  animation: ${moveLeftToRight} 1s ease-in-out;
`;
export default Homepage;
