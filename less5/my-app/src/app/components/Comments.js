import React from "react";
import uniqid from 'uniqid';

import { Loader } from ".";
import { useDataFetch } from "../../hook/useDataFetch";

export const Comments = ({id}) => {

    const [ data ] = useDataFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

    
    if( data.length === 0){
        return (
            <Loader/>
        )
    }
    return(
        <div>
            {
                data.map( comment => {
                    return (
                        <div key={uniqid()}>
                            <h4>Name: { comment.name }</h4>
                            <p>{ comment.body }</p>
                        </div>
                    )
                })
            }
        </div>
    )
}