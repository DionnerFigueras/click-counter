import React from "react";
import '../styles/Counter.css'

function Counter (props) {
    return (
        <div className="contenedor-counter">
            {props.clicks}
        </div>
    );
}

export default Counter;