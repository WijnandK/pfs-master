import React from 'react';

 

const toolbar = props => (
    <div className={`toolbar ${props.bck ? "bck" : ""}`}>
       {props.children}
    </div>
);

export default toolbar;