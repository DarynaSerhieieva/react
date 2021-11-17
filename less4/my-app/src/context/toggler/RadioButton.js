import React from "react";
import PropTypes from 'prop-types';
import { ThemeContext } from '../context.helper';

export const RadioButton = ({children, name, actionState, action}) => {
    return(
        <ThemeContext.Consumer>
            {
                value => (
                    <label>
                        <input 
                            className="defaultRadio visually-hidden"
                            type='radio'
                            onClick={action}
                        />
                        <span className="radioText">
                            <span style={{backgroundColor: value.theme}} className={actionState ? 'activ' : ''}></span>
                            {children || name}
                        </span>
                    </label>
                )
            }
           
        </ThemeContext.Consumer>
    )
}

RadioButton.propTypes = {
    children: PropTypes.string,
    name: PropTypes.string.isRequired,
    actionState: PropTypes.bool,
    action: PropTypes.func
}
