import React from 'react'
import { Categories } from '../components/Categories'
import { LoansFilter } from '../components/LoansFilter'
import categories from '../API/mockCatLoans.json'
import { Catalog } from '../components/Catalog'

export const Loans = () => {
  return (
      <div className='content'>
          <h1 className='page-title'>Займы</h1>
          <LoansFilter />
          <Categories list={categories} />
          <Catalog />
    </div>
  )
}
