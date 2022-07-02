import React from 'react'
import { ProductCard } from './ProductCard'
import mockProduct from '../API/mockProduct.json'


export const Catalog = () => {
    return (
        <div className='catalog'>
            {mockProduct.map((item) => (
               <ProductCard product={item} /> 
            ))}
            
        </div>
    )
}
