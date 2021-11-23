import React from "react";
import uniqid from 'uniqid';

import { useParams } from "react-router";

import { useDataFetch } from "../../hook/useDataFetch";
import { Link } from 'react-router-dom';
import { Loader } from "./";

export const LatestNews = () => {

    const { limited } = useParams();

    const [ data ] = useDataFetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=${limited || 20}`);

    if( data.length === 0){
        return (
            <Loader/>
        )
    }

    return(
        <>
           {
                data.map( post => {
                    return (
                        <div key={uniqid()}>
                            <Link to={`/posts/${post.id}`}><h2>{post.title}</h2></Link>
                            <p>{post.body}</p>
                            <h4>{post.id}</h4>
                        </div>
                    )
                })
            }
        </>
    )
}
