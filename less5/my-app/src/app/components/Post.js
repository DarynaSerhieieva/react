import React from "react";
import { Comments } from "./Comments";
import { useDataFetch } from "../../hook/useDataFetch";

export const Post = () => {

    const [ data ] = useDataFetch('https://jsonplaceholder.typicode.com/posts/1');

    return(
        <div>
            <h2>{data.userId}</h2>
            <p>{data.title}</p>
            <p>{data.body}</p>
            <div>
                <h3>Comments: </h3>
                <Comments
                    id='1'
                />
            </div>

        </div>
    )
}
