import React from "react";
import './style.css'

export const Loader = () => {

    return (
        <div className='box-loader'>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div> 
        </div>
    )
} 
