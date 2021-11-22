import React from "react";

import { useDataFetch } from "../../hook/useDataFetch";

export const LatestNews = () => {

    const [ data ] = useDataFetch('https://jsonplaceholder.typicode.com/posts');

    return(
        <>
            <h2>LatestNews</h2>
        </>
    )
}
