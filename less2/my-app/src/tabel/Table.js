import React from "react";

export const Table = ({children}) => {

    return(
        <>
            <table>
                <tbody>
                    {children}
                </tbody>
            </table>
        </>
    )
    
}
