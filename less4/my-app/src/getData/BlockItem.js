import React from "react";
import uniqid from 'uniqid';

import { useDataFetch } from "./useDataFetch";

export const BlockItem = ({name, url }) => {
    const [ data ] = useDataFetch(url);
    return(
        <div className='data-table__list'>
            <h3> {name} </h3>
            <ul>
                {
                    data.map( item => (
                        <li key={uniqid()}>{ item.title || item.name }</li>
                    ))
                }
            </ul>
        </div>
    );
}
