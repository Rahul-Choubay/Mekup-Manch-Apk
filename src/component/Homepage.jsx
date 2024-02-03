import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Div>
      <div className="maindiv">
        <div className="divmain">
            <div className="img">
          <div >
            <img  src="Groom.jpg" alt="Description" />
          </div>
          </div>
          <div className="Contentdiv">
          <div >
            <h2>For every Bride, every Groom, every Buetu Parler Real results..</h2>
            <p>We’re a the mission to provide a world-class Meukup for anyone, anywhere.</p>
            <div className="btndiv" style={{display:"flex", flexDirection:"row"}}>
            <button className="butt" style={{justifyContent:"center", textAlign:"center"}}><Link to="/signup" style={{color:"white" , textDecoration:"none" , textAlign:"center", alignItems:"center"}}  >Clint</Link></button>  
            <button className="butt" style={{justifyContent:"center", textAlign:"center"}}><Link to="/signup" style={{color:"white" , textDecoration:"none"}}   >Artist</Link></button>  
            <button className="butt" style={{justifyContent:"center", textAlign:"center"}}><Link to="/signup" style={{color:"white" , textDecoration:"none"}}   >/Beauty Parlour</Link> </button>  {/* Corrected spelling from 'Perents' to 'Parents' */}
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

export default Homepage;
