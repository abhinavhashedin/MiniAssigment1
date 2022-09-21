import React from 'react'
import './Counter.css';
import { useState } from 'react';

const Counter = () => {
    const [counter, Setcounter] = useState(0);

    const increment = () => {
        Setcounter((prev) => {
            return prev = prev + 1;
        })
    }

    const decrement=()=>{
        Setcounter((prev)=>{
            return prev = prev - 1;
        })
    }

    const reset=()=>{
        Setcounter(0);
    }

    const submit=()=>{
        alert(`Current Value of Counter is : ${counter}`)
    }


    return (
        <div>
            <div className='container'>
                <p className='p-counter'>React Counter :</p>
                <div className='text-container'>
                    <p>{counter}</p>
                </div>
                <div className='button-container'>
                    <button className='button' onClick={() => increment()}>+</button>
                    <button className='button' onClick={() => decrement()}>-</button>
                    <button className='button' onClick={() => reset()}>Reset</button>
                </div>
                <div className='button-container-submit'>
                    <button className='button' onClick={()=>submit()}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Counter