import React from 'react';

import Button from '../Button/Button';
import Image from "../Image/Image"

 

const Post = (props) => {
   
  return (
   <article className="post">
      
    <div className="post_flex">
    <div className="post__image">
      <Image imageUrl={props.image}   contain/>
    </div>
     <header className="post__header">
      <h3 className="post__meta">
        Posted by {props.author} on {props.date}
      </h3>
      <h1 className="post__title">{props.title}</h1>
    </header>
    </div>
      
  
    <div className="post__actions">
     <Button mode="flat" link={`/blog/${props.id}`}>
        View
      </Button>
      </div>
 
     
  </article>
  );
}

export default Post;
