import React from 'react'

export const Categories = (props) => {
    return (
        <div className='categories'>
            { props.list.map((category) => (
                <button key={category.id}>{category.name}</button>
            ))}
        </div>
    )
}
