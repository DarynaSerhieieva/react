import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './style.css';

import { useDataFetch } from "../../hook/useDataFetch";

export const Item = () => {

    const { itemid } = useParams();

    const [ data ] = useDataFetch(`https://jsonplaceholder.typicode.com/users/${itemid}`);

    const [ rating, setRating ] = useState('');

    const getRate = () => Number(localStorage.getItem(`id ${itemid}`))

    const handlerRating = e => {

        let rate = getRate() + Number(e.target.value);
        localStorage.setItem(`id ${itemid}`, rate);
        
        setRating(rate);
        e.target.value = 'base';
    }

    useEffect(() => {
        setRating(getRate());
    }, [itemid]);

    return (
        <>
            <div className='block'>
                <h2>{data.name}</h2>
                <h3> Rating: { rating }</h3>
            </div>
            
            <div className='block'>
                <h3>Rate user: </h3>
                <select onChange={ handlerRating }>
                    <option value='base' selected disabled hidden>Choose here</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            
        </>
    )
}

