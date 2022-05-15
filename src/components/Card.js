import React from "react"
import star from "./star.png"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            {props.item.openSpots === 0 && <div className="soldoutbadge">Sold Out </div>}
            <img src={props.item.coverImg} className="card-img" ></img>
            <div className="cardstats">
                <span>{props.item.stats.rating}</span>
                <img src={star} className="star" alt="" />
                <span>{props.item.stats.reviewCount}</span>
                <span> - 
                {props.item.location}</span>
                </div>
                <p>{props.item.title}</p>
                <p><span className="bold">From ${props.item.price} </span>/ person</p>
            

        </div>
    )
}