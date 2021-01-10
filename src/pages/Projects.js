import React, { Component, Fragment } from "react";
 
import dl from "../static/images/dl.jpg";

import Fade from "react-reveal/Fade";

 

import dconn from "../static/images/dconn.png";
import places from "../static/images/places.png";
import nstore from "../static/images/nstore.png";
 
import nodejsblack from "../static/images/nodejsblack.png";
 
import Image from "../components/Image/Image";
import InfoModal from "../components/InfoModal/InfoModal"
import Backdrop from "../components/Backdrop/Backdrop";
import Cardpf from "../components/Cardpf/Cardpf";

class Projects extends Component {

    state = {
      showModal: false,
      renderinfo: "",
      description1: "MERN, creating users and uploading placespictures, Mongo atlas and node with firebase front end hosting. Pictures will be deleted every 30minutes due  of the free tier",
     description2: "NEXTJS & express ecommerce shop with admin utility, and a near perfect seo score due to serverside rendering, image uploaded with cloudinary",
      description3: "MERN project for a message board to collaborate, - Course project, simple  but effective in all the crud operations front & back",
      description4: "Making it easy on mobile to navigate and filter rides scheduled in excel"

    }
      closeModalHandler = () => {
          
    this.setState({showModal: false})
  }
  openInfoModalHandler = (id) => {
    const id2 = id
 
    this.setState({showModal: true, renderinfo: id2})
  }
  render() {
    let modal = null

    if (this.state.showModal) {
modal = (
           <Fragment>  
             <Backdrop onClick={this.closeModalHandler}/> <InfoModal onAcceptModal={this.closeModalHandler}>
            <h1 className="modal__title">Info</h1>
            <p className="modal__render">{this.state.renderinfo}</p>
          </InfoModal></Fragment>
    )
    } 
    return (
     
       <div className="contain_wrapper">
          {modal}
         

<div className="project_wrapper_bck">
  
 
      
     
      <div 
  className="rotating"
  style={{width: "100px", height: "100px" , lineHeight: "100px" , textAlign: "center"}} 
    > 
     <div className="back_project_head">
        <Image imageUrl={dl} containc/> 
      </div> 
    
    </div>
      <div className="projectpftext fadein">
      <p className="projectpftextp"> PORTFOLIO PROJECTS </p> 
      </div>
         <div className="postLine one"/>
              </div>  
    
     

        <div className="project_card_wrapper">
               <Fade bottom>
  <Cardpf 
    image={nodejsblack} 
     col="one"
    title="Excel schedule sort and display"   
        visit="https://thirsty-almeida-c471b4.netlify.app"

  openInfo={() => this.openInfoModalHandler(this.state.description4)}/>
    </Fade>
          <Fade bottom>
   <Cardpf 
    image={nstore}
    col="z" 
    title="NEXTJS"
    visit="https://nextjsshop.now.sh/login"   
   openInfo={() => this.openInfoModalHandler(this.state.description2)}/>
    </Fade>
    <Fade bottom>
      <Cardpf 
              image={places} 
               col="two"
              title="MERN FULLSTACK"   
              visit="https://maxplacesapp.web.app/"
              openInfo={() => this.openInfoModalHandler(this.state.description1)}/>   
    </Fade>
    <Fade bottom>
  <Cardpf 
    image={dconn} 
     col="four"
    title="COURSE APP"   
    visit="https://powerful-ridge-27803.herokuapp.com/"
  openInfo={() => this.openInfoModalHandler(this.state.description3)}/>
    </Fade>
 

        </div>
      </div>
    );
  }
}

export default Projects;
