import React from "react";

export const Button = ({ type, action, children }) => {

    return (
        <>
            <button style={{margin: '20px 0 50px 0'}} type= {type } onClick={ action }>{ children }</button>
        </>
    )
}
