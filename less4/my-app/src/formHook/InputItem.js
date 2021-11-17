import React from "react";
import PropTypes from 'prop-types';

export const InputItem = ({action, type, value, placeholder}) => {
    return (
        <>
            <input 
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={action}
            />
        </>
    )
}

const TYPE = ['text', 'password', 'number', 'email'];

InputItem.propTypes = {
    type: PropTypes.oneOf(TYPE).isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any.isRequired,
    action: PropTypes.func
}