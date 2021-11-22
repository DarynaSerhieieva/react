import React from "react";
import { useDataFetch } from "../../hook/useDataFetch";

export const MainList = () => {
    
    const [ data ] = useDataFetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20&_sort=id&_order=desc`);

    return(
        <>
            
        </>
    )
}
