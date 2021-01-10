import React from "react";
import Button from "../Button/Button";
import Image from "../Image/Image"

 
const Card = (props) => {
  return (

    <div className={`card_wrapper ${props.col}`}>
        <div className="card_wrap_img">
          <div className="cc_wrapp">
   <Image imageUrl={props.image} contain/>
          </div>
   
        </div> 
        <div className="card_title">
         <h4>{props.title} </h4> 
        </div>
        <div className="card_wrap_btn">
  <Button  mode="raised " onClick={props.openInfo}>
         
           INFO 
        </Button> 
        <Button design="danger" mode="raised">
          <a className="refa" href={`${props.visit}`}> VISIT </a>
         
        </Button>
        </div>
      
      {/* <div className="card_wrapper_image"> 
        // 
      </div> */}
    
       
      
      </div>
      
     
  );
};

export default Card;
