import React, { Component, useState } from "react";
import { useParams } from "react-router";
import './style.css';

import { useDataFetch } from "../hook/useDataFetch";

export const Item = () => {

    const params = useParams();

    const [ data ] = useDataFetch(`https://jsonplaceholder.typicode.com/users/${params.itemid}`);

    const [ rating, setRating ] = useState(localStorage.getItem(`rating ${params.itemid}`));

    const handlerRating = e => {
        console.log(rating)
        const newRating= Number(rating) + Number(e.target.value)
        setRating(newRating);
        localStorage.setItem(`rating ${params.itemid}`, newRating);
    }

    return (
        <>
            <div className='block'>
                <h2>{data.name}</h2>
                <h3> Rating: { rating }</h3>
            </div>
            
            <div className='block'>
                <h3>Rate user</h3>
                {/* <input type='number' onChange={ handlerRating }/> */}
                <select onChange={ handlerRating }>
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

