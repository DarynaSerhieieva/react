import React from "react";
import PropTypes from 'prop-types';

export const Cell = ({children, cells, color, currency, type , background}) => {
    const types = () => {
        if (type === 'date') {
            return {
                'fontStyle': 'italic'
            }
        } else if (type === 'number' || type === 'money') {
            return {
                'textAlign': 'right'
            }
        } else if (type === 'text') {
            return {
                'textAlign': 'left'
            }
        }
    }

    const curr = () => {
        if (type === 'money' && currency) {
            return <span>{currency}</span>;
        }

        console.error('Currency not found');

        return '';
    }
    
    return(
        <td colSpan={cells} style={{backgroundColor: background, color: color, ...types()}}>
            {children}
            {type === 'money' ? curr(): ''}
        </td>
    )
}
const TYPE = ['date', 'number', 'money', 'text']

Cell.defaultProps = {
    cells: 1,
    background: 'transparent',
    color: 'black',
    type: 'text'
}

Cell.propTypes = {
    cells: PropTypes.number,
    background: PropTypes.string,
    color: PropTypes.string,
    currency: PropTypes.string,
    type: PropTypes.oneOf(TYPE)
}