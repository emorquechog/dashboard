import React from "react"
import "./card.css"

const Card = (props) => {
    return (
        <div className="card" style={{height: props.height, backgroundColor: props.bgColor, marginLeft: props.margin}}>
            <h3>{props.title}</h3>
            <span>category</span>
            <span>{props.description}</span>

        </div>
    )
}

export default Card