import React from "react"
import weirdgoat from "./weirdgoat.png"
import star from "./star.png"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img src={props.img} className="card-img"></img>
            <div className="cardstats">
                <span>{props.rating}</span>
                <img src={star} className="star" />
                <span>{props.reviewCount}</span>
                <span> - 
                {props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price} </span>/ person</p>
            

        </div>
    )
}