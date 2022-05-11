import React from "react"
import weirdgoat from "./weirdgoat.png"
import star from "./star.png"

export default function Card() {
    return (
        <div className="card">
            <img src={weirdgoat} className="card-img"></img>
            <div className="cardstats">
                <img src={star} className="star" />
                <span>5.0</span>
                <span>(6)</span>
                <span> ~  Nepal </span>
                </div>
                <p>Hug this weird goat </p>
                <p><span className="bold">From $420 </span>/ person</p>
            

        </div>
    )
}