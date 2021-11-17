import React from "react";

export const Select = ({ children, action, value }) => {

    return (
        <>
            <select onChange={action} value={value}>
                {children}
            </select>
        </>
    )
}
