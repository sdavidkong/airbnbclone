import React from "react";
import Logo from "./myanmar2.jpg";

export default function Hero() {
    return(
        <div className="hero">
            <img src={Logo} className="heroimg" />
            <h1 className="heroheader">Incredible Experiences</h1>
            <p className="herotext">Find unqiue destinations and one-of-a-kind hosts- all here.</p>
        </div>
    )
}