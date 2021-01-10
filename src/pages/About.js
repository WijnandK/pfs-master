import React, { Fragment } from "react";
 
 
import foolhat from "../static/images/foolhat.svg";
import javascript from "../static/images/javascript.svg";
import edd from "../static/images/edd.svg";

import Fade from "react-reveal/Fade";

import devh from "../static/images/devh.jpg";
import backimg from "../static/images/backimg.png";

import { Container, Row, Col } from "reactstrap";

 

import Accordion from "../components/Acccordion/Accordion";
 
class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      isColor: false,
      isGo: false,
      isFlipping: false,
    };

    this.roles = [
      " Technology Passion",
      "Always Optimizing",
      "Software is cool",
    ];
  }

  //  componentDidMount() {
  //   this.animateColor();

  // }

  // componentWillUnmount() {
  //   this.colorAnimationInterval && clearInterval(this.colorAnimationInterval);

  // }

  // animateColor() {
  //   this.colorAnimationInterval = setInterval(() => {
  //     this.setState({
  //       isColor: !this.state.isColor
  //     });
  //   }, 2200);
  // }

  render() {
    return (
      <Fragment>
        <div className={` cover-3 `}>
          <div className="main-section">
            <div className="background-image ">
              <img alt="bluebackground" src={backimg} />
            </div>
            <Container>
              <Row>
                <Col md="6">
                  <h1 className="title fadein">Welcome</h1>
                  <h4 className="subtitle fadein">To my page</h4>
                </Col>
                <Col>
                  <div>
                    <img alt="devimage" src={devh} className="image" />
                  </div>
                  <p className="subsubTitle fadein">
                    Feel free to read a short description about me.
                  </p>
                  <div className="slideLine_" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Fade bottom>
          <div className="section_wrapper">
            <div className="section_item">
              <div className="section_image">
                <img alt="jokerhat" src={foolhat} className="image" />
              </div>
              <div className="section_left">
                <div className="section_title">Maybe I am not the best</div>
                <div className="section_line" />
                <div className="section_text">
                 But I am eager to learn and develop myself. In every single way. You will not regret it if you give me the chance I'm waiting for.
                </div>
              </div>
            </div>

            <Fade bottom>
              <div className="section_item one">
                <div className="section_image">
                  <img alt="javascriptlogo" src={javascript} className="image" />
                </div>
                <div className="section_left">
                  <div className="section_title">Favorite language</div>
                  <div className="section_line" />
                  <div className="section_text">
                    Its so versatile from angular too react native. ES6+
                    includes easy to use fancy helpers. I also like lodash
                  </div>
                </div>
              </div>
            </Fade>

            <Fade bottom big>
              <div className="section_item two">
                <div className="section_image">
                  <img alt="sectionhero" src={edd} className="image" />
                </div>
                <div className="section_left">
                  <div className="section_title">No Degree!</div>
                  <div className="section_line" />
                  <div className="section_text">
                    Had to quit my bachelor in the 2th yr due to personal
                    reasons. Since then I have been self education on my
                    passsion web dev
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
        <Fade bottom>
          <div className="section_item z">
            <div className="acc_wrapper">
              <Accordion />
            </div>
          </div>
        </Fade>
        <footer className="aboutFooter">
          <div className="f_logo">© - 2020 Wijnand Korlaar</div>
        </footer>
      </Fragment>
    );
  }
}

export default About;
