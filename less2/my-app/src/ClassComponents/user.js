import React from "react";
import Button from "../functionalComponents/button";

const User = ({interviewed, user, toggleInterviewed}) => {

    const styleButton = {
        backgroundColor: 'orange',
        padding: '5px 10px',
        borderRadius: '8px',
        cursor: 'pointer',
        marginLeft: '10px'
    }

    return(
        <li>
            <span style={{backgroundColor: interviewed? 'green' : 'transparent'}}>
                {user.name}
            </span>
            <Button 
                style={styleButton} 
                click={() => {toggleInterviewed(user.id)}}
            >
                {interviewed ? 'absent' : 'arrived'}
            </Button>
        </li>
    )
}

export default User;