import React from 'react'

const Button = ({children, style, click}) => {
    return (
        <button style={{...style}} onClick={click}>
            {children}
        </button>
    );

}

export default Button;