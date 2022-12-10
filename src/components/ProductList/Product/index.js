import React from 'react'
import './index.css'
function index(props) {
  return (
    <div className='card'>
                <img src ={props.product.image} alt=""/>
                <h1>{props.product.title}</h1>
                <p>{props.product.description}</p>
                <p>{props.product.price}</p>
                <button onClick={()=>{
                    console.log('buy', props.product.price)
                }}>Buy</button>
            </div>
  )
}

export default index