import React from 'react';
 

const image = props => (
  <div
    className="image"
    style={{
      backgroundImage: `url('${props.imageUrl}')`,
      backgroundSize: props.contain ? 'contain' : 'cover',
      s: props.left ? 'left' : 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: props.black ? 'black' : ''
    }}
  />
);

export default image;
    