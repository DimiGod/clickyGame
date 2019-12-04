import React from "./node_modules/react";
import "./style.css";

function Container(props) {
    return (
        <div className="container">{props.children}</div>

    )
}


export default Container;