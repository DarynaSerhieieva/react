import React from "react";

export const Cell = React.memo(({id, handler, value}) => {
    return (
        <input
            onChange={(event) => handler(event, id)}
            value={value}
            style={{width:'50px'}}
        />
    )
})
