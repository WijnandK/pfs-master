import React, { Fragment } from 'react';
 

const Tag = (props) => {
  
  return (
    <Fragment>
         {/* <div
       className="someClassName"
       style={{ backgroundImage: `url(${ball})` }}
          />  */}
          <div
            style={{ top: `${props.top}px`, left: `${props.left}px` }}
            className={`tag_color_${props.char} ${props.isColor ? 'isColor' : ''} `}
          >
            <div className="tag_square"> </div>
          <div className="tag_lock"> </div>
          <div className="tag_lock_string"></div>
          </div>
    </Fragment>
  );
}

export default Tag;
