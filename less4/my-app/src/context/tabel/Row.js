import React from "react";
import PropTypes from 'prop-types';

export const Row = ({children, head, click}) => {
    return(
        <tr onClick={click} style={{fontWeight: head? 'bold': 'normal'}}>{children}</tr>
    )
}

Row.defaultProps = {
    head: false
}

Row.propTypes = {
    head: PropTypes.bool
}