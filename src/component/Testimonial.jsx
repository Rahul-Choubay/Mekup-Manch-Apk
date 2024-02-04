import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { MdStar, MdStarBorder } from 'react-icons/md';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const imageChange = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  25% {
    transform: translateX(0%);
    opacity: 1;
  }
  75% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const images = ["Groom1.jpeg","Groom1.jpeg","Groom1.jpeg", ];

const Testimonial = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatedDiv>
      <Card>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '40%', marginLeft: '2rem' }}>
            <AnimatedImage
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt="Description"
            />
          </div>
          <div style={{ width: '60%', marginLeft: '2rem' }}>
            <CardBody>
              <CardTitle tag="h5">
                Artist
                <div style={{ display: 'inline-block', marginLeft: '10px' }}>
                  <MdStar />
                  <MdStar />
                  <MdStar />
                  <MdStarBorder />
                  <MdStarBorder />
                </div>
              </CardTitle>
              <CardText>"</CardText>
              <CardText tag="h6">Rahul Chaubey</CardText>
              <Button
                color="primary"
                style={{
                  width: '14vw',
                  height: '6vh',
                  borderRadius: '10px',
                  backgroundColor: '#1865f2',
                  color: 'white',
                }}
              >
                <Link
                  to="/signup"
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    textAlign: 'center',
                    alignItems: 'center',
                  }}
                >
                  Teachers, start here
                </Link>
              </Button>
            </CardBody>
          </div>
        </div>
      </Card>
    </AnimatedDiv>
  );
};

const AnimatedDiv = styled.div`
  width: 97vw;
  height: 70vh;
  overflow: hidden;
  animation: ${fadeIn} 1s ease-in-out;
`;

const AnimatedImage = styled.img`
  width: 100%;
  animation: ${imageChange} 3s ease-in-out;
`;

export default Testimonial;
