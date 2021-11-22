import React from "react";

import { useDataFetch } from "../../hook/useDataFetch";

export const Comments = ({id}) => {

    const [ data ] = useDataFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

    return(
        <div>
            {
                data.map( comment => {
                    return (
                        <div>
                            <h4>Name: { comment.name }</h4>
                            <p>{ comment.body }</p>
                        </div>
                    )
                })
            }
        </div>
    )
}