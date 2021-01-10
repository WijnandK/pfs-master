import React, { Component  } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Button from "../Button/Button";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
 import Flip from "react-reveal/Flip";
 
 

import Image from "../Image/Image";
 
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

class SwiperP extends Component {


  
  render() {
    return (
      <div className="swipecontainer fadein">
        {/* <Button link="/" mode="raised" design="accent">
          Back to page
        </Button> */}

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
         
        >
          {" "}
          <SwiperSlide>
         
            {" "}
            <div className="slidewrapimg">
              <span>
                <h5>{this.props.blogs[0].title}</h5>
                <p>
                  {this.props.blogs[0].author}
                </p>
                <p>{this.props.blogs[0].date}</p>
                
              </span>
                 <Flip left>
          <div className="btn_margin">
              <Button link={`/blog/${this.props.blogs[0].id}`} mode="raised" onClick={() => this.setBlogPost(this.props.blogs[0])}>Read more</Button>
              </div>
        </Flip>
            
                 
              <Image imageUrl={this.props.blogs[0].image} contain />
            </div>
          </SwiperSlide>
         <SwiperSlide>
            {" "}
            <div className="slidewrapimg">
              <span >
                <h5>{this.props.blogs[1].title}</h5>
                <p>
                  {this.props.blogs[1].author}
                </p>
                <p >{this.props.blogs[1].date}</p>
              </span>
                <div className="btn_margin">
              <Button  link={`/blog/${this.props.blogs[1].id}`} mode="raised" onClick={() => this.setBlogPost(this.props.blogs[1])}>Read more</Button>
              </div>
              <Image imageUrl={this.props.blogs[1].image} contain />
            </div>
          </SwiperSlide>
         <SwiperSlide>
            {" "}
            <div className="slidewrapimg">
              <span>
                <h5>{this.props.blogs[2].title}</h5>
                <p>
                  {this.props.blogs[2].author}
                </p>
                <p>{this.props.blogs[2].date}</p>
              </span>
             
                <div className="btn_margin">
              <Button  link={`/blog/${this.props.blogs[2].id}`} mode="raised" onClick={() => this.setBlogPost(this.props.blogs[2])}>Read more</Button>
              </div>
          
              <Image imageUrl={this.props.blogs[2].image} contain />
            </div>
          </SwiperSlide>
       
          ...
        </Swiper>
      </div>
    );
  }
}

export default SwiperP;
