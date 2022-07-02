import React, { useState } from 'react'

export const LoansFilter = () => {

    const [sum, setSum] = useState(0);
    const [period, setPeriod] = useState(0);

    const findBtnHandler = () => {
        console.log(`Сумма: ${sum}, Срок: ${period}`);
    }

    const sumChangeHandler = (e) => {
        setSum(e.target.value);
    }

    const periodChangeHandler = (e) => {
        setPeriod(e.target.value);
    }

    return (
        <div className='loans-filter'>
            <input
                type='number'
                placeholder='Сумма займа'
                name='sum'
                onChange={sumChangeHandler}
            >
            </input>
            <input
                type='number'
                placeholder='Срок в днях'
                name='period'
                onChange={periodChangeHandler}
            ></input>
            <button onClick={findBtnHandler}>Найти</button>
        </div>
    )
}
