import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <nav>
            <div className='nav__content'>
            <div className="logo">
                    Банкир
                </div>

                <div className="menu">
                    <Link to='/debet-cards'>Дебетовые карты</Link>
                    <Link to='/credit-cards'>Кредитные карты</Link>
                    <Link to='/mkr'>Микрозаймы</Link>
                    <Link to='/credits'>Кредиты</Link>

                </div>
            </div>
        </nav>
    )
}
