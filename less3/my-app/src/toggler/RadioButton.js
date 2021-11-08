import React from "react";
import PropTypes from 'prop-types';

export const RadioButton = ({children, name, actionState, action}) => {
    return(
        <>
            <label>
                <input 
                    className="defaultRadio visually-hidden"
                    type='radio'
                    onClick={action}
                />
                <span className="radioText">
                    <span className={actionState ? 'activ' : ''}></span>
                    {children || name}
                </span>
            </label>
        </>
    )
}

RadioButton.propTypes = {
    children: PropTypes.string,
    name: PropTypes.string.isRequired,
    actionState: PropTypes.bool,
    action: PropTypes.func
}
