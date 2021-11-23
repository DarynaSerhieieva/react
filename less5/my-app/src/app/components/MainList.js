import React from "react";
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";


import { useDataFetch } from "../../hook/useDataFetch";
import { Button, Loader } from "./";

export const MainList = () => {
    
    const [ index, setIndex ] = useState(20);
    const [ isLoading, setIsLoading ] = useState(true);

    const [ data ] = useDataFetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${index}&_sort=id&_order=desc`);

    const hendlerAddMore = () => {
        setIndex( index + 20 )
        setIsLoading(true)
    };

    useEffect(() => {
        setIsLoading(false);
    }, [data]);

    if( isLoading) {
        return <Loader/>
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
            {
                index >= 100 ? (
                    ''
                ) : (
                    <Button type='button' action={ hendlerAddMore }>show more</Button>
                )
            }
            
        </>
    )
}
