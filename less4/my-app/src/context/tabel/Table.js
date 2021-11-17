import React from "react";
import { ThemeContext } from '../context.helper';


export const Table = ({children}) => {

    return(
        <ThemeContext.Consumer>
            {
                value => (
                    <table style={{backgroundColor: value.theme}}>
                        <tbody>
                            {children}
                        </tbody>
                    </table>
                )
            }
            
        </ThemeContext.Consumer>
    )
    
}
