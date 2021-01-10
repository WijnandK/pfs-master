import React, { Component  } from "react";

import Image from "../components/Image/Image";
 
import Button from "../components/Button/Button"
import {BLOGZ , blogs1} from "../data";
 
class BlogPost extends Component {
  state = {
    blogs: BLOGZ,
    blogsF: blogs1,
    title: "",
    author: "",
    date: "",
    image: "",
    content: "",
    post: {},
  };

  async componentDidMount() {
    const blogz = [...this.state.blogs];
    const blogf = [...this.state.blogsF]
    const postId = parseInt(this.props.match.params.postId);
    let post
      if (postId <= 3) {
          post = blogz.filter((blog) => {
      return blog.id === postId;
    })
  } else if (postId > 3) {
      post = blogf.filter((blog) => {
      return blog.id === postId;
    })
  }
 
    this.setState({
      title: post[0].title,
      content: post[0].content,
      date: post[0].date,
      author: post[0].author,
      image: post[0].image,
      q: post[0].q
    });
  }

  render() {
    return (
      <div className="contain_wrapper fadein">
     <div className="single-post_space"/>
          <div className="single-post__image">
          <Image center imageUrl={this.state.image} />
        </div>
 
    
      <section className="single-post">
      
        <h1>{this.state.title}</h1>
        <h2>
          Created by {this.state.author} on {this.state.date}
        </h2>
      <div className="postLine"/>
                <div className="singe-post__qoute"><h4>{this.state.q ? `" ${this.state.q} "`: null}   </h4></div>
      <div className="btn_post_side"><Button mode="raised" link="/blog">    Back          </Button> </div>
      
        <p className="single-post__text">{this.state.content}</p>
      
      
      <div style={{paddingBottom: '100px'}}/>
      </section>
      
      </div>
    );
  }
}
 
export default BlogPost;
