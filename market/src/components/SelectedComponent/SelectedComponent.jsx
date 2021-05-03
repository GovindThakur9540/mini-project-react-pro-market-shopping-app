import React from 'react'
import "./SelectedComponent.css"

export default function SelectedComponent(props){
    return(
        <div className="selected-item">
            <img src={props.item.image} alt={props.item.name}/>

            <div>
                <h1>{props.item.name}</h1>
                <div><p>{props.item.description}</p></div>
            </div>
        </div>
    )
}