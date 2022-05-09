import React from "react"
import weirdgoat from "./weirdgoat.png"

export default function Card() {
    return (
        <div className="card">
            <img src={weirdgoat} className="card-img"></img>
            <div className="cardstats">
                <img src="" />
                <span>5.0</span>
                <span>(6)</span>
                <span>Nepal</span>
                <p>Hug this weird goat </p>
                <p>$420 / person</p>
            </div>

        </div>
    )
}