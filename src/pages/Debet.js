import React from 'react'
import categories from '../API/mockCat.json'
import { Banner } from '../components/Banner'
import { Catalog } from '../components/Catalog'
import { Categories } from '../components/Categories'

export const Debet = () => {
    return (
        <div className='content'>
            <h1 className='page-title'>Дебетовые карты</h1>
            <Banner />
            <Categories list={categories} />
            <Catalog />
        </div>
    )
}
