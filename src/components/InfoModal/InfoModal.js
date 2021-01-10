import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../Button/Button';
 

const InfoModal = props =>
  ReactDOM.createPortal(
    <div className="infomodal">
      <header className="infomodal__header">
        <h1>{props.title}</h1>
      </header>
      <div className="infomodal__content">{props.children}</div>
      <div className="infomodal__actions">
       
        <Button
          mode="raised"
          onClick={props.onAcceptModal}
        
        >
          BACK
        </Button>
      </div>
    </div>,
    document.getElementById('InfoModal-root')
  );

export default InfoModal;
