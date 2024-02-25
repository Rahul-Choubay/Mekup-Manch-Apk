import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
`;
const Styled = styled.div`
  background-color: #333;
  color:white;
 .main{
display: flex;
padding: 1rem;
flex-direction: row;
.first{
    color:white;
    width: 33%;
    h3{
        margin-bottom:1rem;
        color:white;
        font-size: 2rem;
        font-weight: 560;

    }
    .con{
        margin-top: 1rem;
        font-size: 1rem;
        font-weight: 360;
    }
.sub{
    margin-top: 1rem;
        font-size: 1rem;
        font-weight: 560;
        input{
             width: 20vw;
             height: 5.5vh;
             border-radius: 9px;
        }
        button{
            width: 6vw;
            height: 6vh;
            background: pink;
            border-radius: 9px;
            :hover{
                background: red;
            }
        }
}
}
.sec{
    color:white;
    width: 33%;
    margin-left: 3rem;
}
 }
`;

const Footer = () => {
  return (
    <>
      <Styled>
        <div className="main">
          <div className="first">
           <div>
            <h3>Mekup Munch</h3>
           </div>
            <div className="con">
              <h2>Mekup Munch</h2>
              <p>
                You can also list down you achievements or some well-known
                clients you’ve worked for. Such details often attract customers
                and encourage them to give you a try. Make sure you add
                everything possible in this section.
              </p>
            </div>
            <div className="sub">
              <div>
                <h1>Subscribe For Offers</h1>
              </div>
              <div>
                <input type="email" placeholder=" enter your email" />
                <button>Subscribe </button>
              </div>
            </div>
          </div>
          <div className="sec">
            <div>
              <h1>Quick Links</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h1>Follow Us</h1>
            </div>
          </div>

          <div>
            <div>
              <h2>Say Hi!</h2>
              <p>info@example.com</p>
              <p>contact@example.com</p>
            </div>
            <div>
              <h2>Call Us</h2>
              <p>Phone: +1 916-875-2235</p>
              <p>Toll Free: +1 910-626-85255</p>
            </div>
            <div>
              <h2>Find Us</h2>
              <p>123 Fifth Avenue, Opp Hut, New York, USA.</p>
            </div>
          </div>
        </div>
      </Styled>
      <StyledFooter>
        <p>&copy; 2024 Mekup Manch Application. All rights reserved.</p>
      </StyledFooter>
    </>
  );
};

export default Footer;
