import React from "react";
import PropTypes from 'prop-types';

import './style.css'

export const InputItem = ({name, type, placeholder, value, handler}) => {

    return (
        <>
            <label>
                <div>{name}</div>

                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handler}
                />
            </label>
        </>
    )
}

const TYPE = ['text', 'password', 'number']

InputItem.propTypes = {
    name: PropTypes.string,
    type: PropTypes.oneOf(TYPE).isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    handler: PropTypes.func.isRequired,
    contentLength: PropTypes.bool,
    contentMaxLength: PropTypes.number
}


