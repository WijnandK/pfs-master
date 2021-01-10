import React, {Fragment} from 'react';
import Typed from 'react-typed';


import backimg from "../static/images/backimg.png"
import section1 from "../static/images/section1.jpg"
import section2 from "../static/images/section2.jpg"


import {    Container, Row, Col } from 'reactstrap';

class FrontPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    }

    this.roles = ['Developer', 'Tech ambitious', 'Team Player', 'Node.js', 'React.js', 'Python', "NextJS", "GraphQL "];
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 3300);
  }



  render() {
   
    const { isFlipping } = this.state;

    return (
      <Fragment>
      <div className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`}
             >
        <div className="main-section">
          <div className="background-image">
            <img alt="bluebackground" src={backimg} />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio .
                        </div>
                      </div>
                      <img  className="image" src={section1} alt="Guy programming welcome"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Passion in tech </h2>
                        <div className="hero-section-content-intro">
                          Profesional and top quality service in web development.
                        </div>
                      </div>
                      <img alt="Guy programming welcome" className="image" src={section2}/>
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                 
                    Welcome here, look around and get to know about me , my work and my passion.
                    Get informed if interested, and discover wat more projects I was working on through the years!
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />


                <div className="hero-welcome-bio">
                  <h2>
                    Let's take a look on my work.
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
       
        </div>
      </div>
      </Fragment>
    )
  }
}








export default FrontPage;
