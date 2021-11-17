import React from "react";
import PropTypes from 'prop-types';

export const LiItem = ({ name, gender, city, email}) => {
    return(
        <li style={{display: "flex", flexDirection: "column"}}>
            <p>Name: {name}</p>
            <span>Email: {email}</span>
            <span>Gender: {gender}</span>
            <span>City: {city}</span>
        </li>
    )
}

LiItem.propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}


