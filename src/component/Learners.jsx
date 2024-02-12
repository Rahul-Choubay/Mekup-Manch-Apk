import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

function Learners() {
  return (
    <Div style={{width:"98.5vw", display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center",alignItems:'center'}}>
      <div style={{width:"90vw", display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center",alignItems:'center'}}>
<div style={{width:"85vw", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center",alignItems:'center'}}>
<div> <img style={{marginLeft:"0.5rem"}} src='Groom1.jpeg' alt='bride' /></div>
<div><img style={{marginLeft:"0.5rem"}} src='Groom1.jpeg' alt='bride' /></div>
<div><img style={{marginLeft:"0.5rem"}} src='Groom1.jpeg' alt='bride' /></div>

</div>
      </div>
      <div style={{width:"90vw", display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center",alignItems:'center'}}>
        <div style={{width:"85vw", display:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center",alignItems:'center'}}>
        <div><img className='img' style={{marginLeft:"0.5rem"}} src='Groom1.jpeg' alt='bride' /></div>
        <div><img className='img'  style={{marginLeft:"0.5rem"}} src='Groom1.jpeg' alt='bride' /></div>
        <div><img className='img' style={{marginLeft:"0.5rem"}} src='Groom1.jpeg' alt='bride' /></div>

        </div>
        </div>
    
    </Div>
  );
}
const Div = styled.div`
.learners-container {
  display: flex;
  justify-content: space-between;  /* To push the content and image to the edges */
  align-items: center;  /* To vertically align content and image */
  padding: 20px;  /* Optional: Add some padding for spacing */
}

.content {
  flex: 1;  /* To make content take up available space */
  padding-right: 20px;  /* Optional: Add some right padding for spacing */
  button{
    width: 15vw;
    height: 6vh;
    background-color: #1865f2;
    border-radius: 8px;
    color:white;
  }

}

.image-container {
  flex: 1;  /* To make image container take up available space */
}

.image {
  max-width: 100%;
  height: auto;

}
.img{

  :hover {
  background-color: red;
}
}
 


`;

export default Learners;
