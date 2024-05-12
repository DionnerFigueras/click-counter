import React from 'react';
import '../styles/Button.css';

function Button (props) {
  return (
    <button className={props.tipoBoton ? 'click-button' : 'restart-button'} onClick={props.clickhandle} >
      {props.texto}
      
    </button>
  );
}

export default Button;