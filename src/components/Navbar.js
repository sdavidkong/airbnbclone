import React from "react";
import Logo from "./airbnblogo.png";

export default function Navbar() {
    return(
        <nav>
            <img src={Logo} className="nav--logo" />
        </nav>
    )
}