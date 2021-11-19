import React from "react";
import { BlockItem } from "./BlockItem";
import "./style.css";

export const DataTable = () => {

    return(
        <div className='data-table'>
            <BlockItem 
                name='Posts'
                url='https://jsonplaceholder.typicode.com/posts'
            />
            <BlockItem 
                name='Comments'
                url='https://jsonplaceholder.typicode.com/comments'
            />
            <BlockItem 
                name='Albums'
                url='https://jsonplaceholder.typicode.com/albums'
            />
        </div>
    )
}