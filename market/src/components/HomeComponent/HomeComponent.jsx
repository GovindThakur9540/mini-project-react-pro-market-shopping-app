import React from 'react'
import { Link } from "react-router-dom"
import "./HomeComponent.css"

export default function Item(props){
    return(
        <div className= "home">
            {props.products.map(item => <Item key={item.id} {...item} getItem={props.getItem} addToCart={props.addToCart} />)}
        </div>,

        <div className="itemCard" id={props.name}>
            <Link to="/item">
                <img src={props.image} alt="" onClick={() => props.getItem(props)}/>
            </Link>
            <p>{props.name}</p>
            <p>Rs {props.price}</p>
            <div className="quantity">
                <div onClick={() => decrement(props.name)}>-</div>
                <div onClick={`quantity-${props.name}`}>1</div>
                <div onClick={() => increment(props.name)}>+</div>
            </div>
            <div className="add-to-cart" onClick={() => props.addToCart(addItem(props))}>
                Add To Cart
            </div>
        </div>
        
    )
    
}


function addItem(props){
    return{
        [props.id]: {
            name: props.name,
            image: props.image,
            price: parseInt(props.price),
            quantity: parseInt(document.querySelector(`.quantity-${props.name}`).innerHTML)
        }
    }
}


function decrement(name){
    let $element = document.querySelector(`.quantity-${name}`)
    let lastValue = parseInt($element.innerHTML)
    if (lastValue > 1)
        $element.innerHTML = lastValue - 1
}

function increment(name){
    let $element = document.querySelector(`.quantity-${name}`)
    let lastValue = parseInt($element.innerHTML)
    $element.innerHTML = lastValue + 1
}


