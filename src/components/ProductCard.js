import React from 'react'

export const ProductCard = (props) => {

    const specs = props.product.specList;
    
    console.log(props);
    return (
        <div className='catalog-item' key={props.product.id}>
            <div className='item-brand'>
                <div className='item-title'>
                    <h3>{props.product.name}</h3>
                    <p className='product-brand'>{ props.product.brand }</p>
                </div>
            </div>
            <img src={`img/${props.product.img}.png`}></img>
            <div className='item-spec'>
                {specs.map((spec) => (
                    <div className='spec-block'>
                        <p className='spec-title'>{spec[0]}</p>
                        <p className='spec-info'>{spec[1]}</p>
                </div>
                ))}
            </div>
            <a href={ props.product.link }><button>Перейти</button></a>
        </div>
    )
}
