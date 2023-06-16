import React from "react"
import './carousel.css'

export default function Card(props) {
    return(
       <div 
            className="card-wrapper" 
            title={props.path}
            onClick={props.onClick}>
            <p className="card-p">{props.title}</p>
                <img className="card-image" src={props.image} alt={props.title} />
       </div>
    )
}