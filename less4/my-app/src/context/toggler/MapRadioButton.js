import React from "react";
import PropTypes from 'prop-types';

export const MapRadioButton = ({label, children, actionState, action}) => {
    return(
        <div className='box-radio'>
            <h2>{label}:</h2>
            {
                React.Children.map( children, ( item ) => {
                    if( React.isValidElement( item ) ){
                        return React.cloneElement(
                            item,
                            {
                                actionState: item.props.name === actionState,
                                action: action( item.props.name )
                            }
                        );
                    }
                })
            }
        </div>
    )
}

const STATE = ['male', 'female', 'left', 'center', 'right', 'baseline', 'red', 'orange', 'transparent'];

MapRadioButton.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element),
    actionState: PropTypes.oneOf(STATE),
    action: PropTypes.func.isRequired
}