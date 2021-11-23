import React from "react";
import { useParams } from "react-router";
import { useState } from "react";

import { Comments } from "./Comments";
import { Button, Loader } from "./";
import { useDataFetch } from "../../hook/useDataFetch";

export const Post = () => {

    const { postid } = useParams();

    const [ data ] = useDataFetch(`https://jsonplaceholder.typicode.com/posts/${postid || 1}`);

    const [ showHide, setShowHide ] = useState(false);

    const handlerShowComment = () => {
        setShowHide(!showHide);

    };

    if( data.length === 0){
        return (
            <Loader/>
        )
    }
    
    return(
        <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <h4>{data.id}</h4>
            <Button tape='button' action={ handlerShowComment } > { !showHide ? 'Show comments': 'Hide comments' } </Button>

            {
                showHide ? (
                    <div>
                        <h3>Comments: </h3>
                        <Comments
                            id={ postid || 1 }
                        />
                    </div>
                ): (
                    <span></span>
                )
            }
           

        </div>
    )
}
