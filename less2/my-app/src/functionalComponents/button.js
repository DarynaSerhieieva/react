import React from 'react'

const Button = ({style, click, text}) => {
    
    return (
        <button style={style} onClick={click}>{text}</button>
    );

}

export default Button;