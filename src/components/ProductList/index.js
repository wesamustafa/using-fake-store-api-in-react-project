import React from 'react'
import productsData from '../../data/products-data'
import Product from './Product'
import './index.css'
function index() {
    const products = productsData.map((product)=>{
        return(
           product.price > 100 && <Product  key={product.id} product={product}/>
        )
    })
  return (
    <div className='products-list'>
       <div className='row'>
       {products}
       </div>
    </div>
  )
}

export default index