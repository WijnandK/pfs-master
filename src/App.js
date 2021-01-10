import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import FrontPage from "./pages/FrontPage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import BlogPost from "./pages/BlogPost";


import Layout from './components/Layout/Layout';
import Backdrop from './components/Backdrop/Backdrop';
import Toolbar from './components/Toolbar/Toolbar';
import MainNavigation from './components/Navigation/MainNavigation/MainNavigation';
import MobileNavigation from './components/Navigation/MobileNavigation/MobileNavigation';
// import ErrorHandler from './components/ErrorHandler/ErrorHandler';




import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";

class App extends Component {
    state = {
    showBackdrop: false,
    showMobileNav: false,
    scrolled: false,
    scroll: 0
    
    }
 componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }
      handleScroll = () => {
       if(window.scrollY >  90){
          
            this.setState({
                scrolled: true,
                scroll: window.scrollY
            })
       }   
       else   {
            this.setState({
                scrolled: false
            })
       }
    }

    
  mobileNavHandler = isOpen => {
    this.setState({ showMobileNav: isOpen, showBackdrop: isOpen });
  };

  backdropClickHandler = () => {
      this.setState({ showBackdrop: false, showMobileNav: false, error: null });
    };
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact render={(props) => <FrontPage {...props} />} />
        <Route path="/About" exact render={(props) => <About isActive={true} {...props} />} />
        <Route path="/Blog" exact render={(props) => <Blog {...props} />} />
        <Route
          path="/Portfolio"
          exact
          render={(props) => <Projects {...props} />}
        />
         <Route
            path="/blog/:postId"
            render={props => (
              <BlogPost
                {...props}
                userId={this.state.userId}
                token={this.state.token}
              />
            )}
          />
        <Redirect to="/" />
      </Switch>
    );
    return (
      <Fragment>
        {this.state.showBackdrop && (
          <Backdrop onClick={this.backdropClickHandler} />
        )}
        {/* <ErrorHandler error={this.state.error} onHandle={this.errorHandler} /> */}
        <Layout
        isScroll={this.state.scrolled}
          header={
            <Toolbar>
              <MainNavigation
                onOpenMobileNav={this.mobileNavHandler.bind(this, true)}    
              />
            </Toolbar>
          }
          mobileNav={
            <MobileNavigation
              open={this.state.showMobileNav}
              mobile
              onChooseItem={this.mobileNavHandler.bind(this, false)}
              close={this.backdropClickHandler}
            />
          }
        />
        {routes}
      </Fragment>
    );
  }
}

export default App;
