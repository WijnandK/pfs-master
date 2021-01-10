import React, { Component , Fragment} from 'react';
import SwiperP from "../../components/SwiperP/SwiperP";


class Blogcomp extends Component {
  render() {
   
    return (
      <Fragment>
          <SwiperP blogs={this.props.blogs}/>
      </Fragment>
    );
  }
}

export default Blogcomp;
