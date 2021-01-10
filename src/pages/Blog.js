import React, {   Fragment } from 'react';

 
 import Button from "../components/Button/Button"
 import Blogcomp from "../components/Blogcomp/Blogcomp"

import {BLOGZ , blogs1} from "../data"


class Blog   extends React.Component {
  state={blogs: BLOGZ, loading: true, title: BLOGZ[0].title, isActiveF: false, isActiveP: true}


    componentDidMount() {
      this.setState({
        blogs: BLOGZ,
        loading: false
      })
    }
    setProgrammingBlock = () => {
      let blogs =  BLOGZ;
   let title = blogs[0].title
      this.setState({blogs: blogs, title: title , isActiveF: false, isActiveP: true})
    }
 setFreeBlock = () => {
      let blogs = blogs1;
      let title = blogs[0].title
      this.setState({blogs: blogs, title: title, isActiveF: true, isActiveP: false})
    }
    render() {
     
    return (
     <Fragment>
           
            <div className="blogwrapper">
              <div className="blogbtns">
    <Button design="accent" mode={`${this.state.isActiveP ? "raised" : ""}  `} onClick={this.setProgrammingBlock}> Programming BLOGS  </Button>
      <Button design="accent" mode={`${this.state.isActiveF ? "raised" : ""}  `} onClick={this.setFreeBlock}>Freetime  BLOGS </Button>
              </div>
          
              <div className="blog_program_banner">
                <Blogcomp blogs={this.state.blogs} />
                              </div>
               
            
       {/* <Post image={fity} date={`2-dec-2020`} title={'Yoga for better coding skills'}/>
              <Post image={fit} date={`11-nov-2020`} title={'You get out wat you put in'}/> */}        
            </div>
          </Fragment>    
      
    )
  }
}

    // <Fragment>
    //           {this.state.blogs.map((blog, i) => (
    //           <Post key={blog.date + `${i}`} id={blog.id} author="Wijnand" image={blog.image} date={blog.date} title={blog.title} content={blog.content} clicked={() => this.setpostHandler(blog)}/> 

    //           ))}
    //         </Fragment  >
export default Blog;