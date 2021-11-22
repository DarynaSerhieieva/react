import React from "react";
import uniqid from 'uniqid';
import { BrowserRouter,  Route, Link} from 'react-router-dom';
import { Item } from "./";

import { useDataFetch } from "../../hook/useDataFetch";

export const List = () => {

    const [ data ] = useDataFetch('https://jsonplaceholder.typicode.com/users');

    return(
        <BrowserRouter>
            <ul>
                
                <Route path='/list/'>
                    {
                        data.map( item => (
                            <li key={uniqid()}>
                                <Link to={`/list/${item.id}`}>{item.name}</Link>
                            </li>
                        ))
                    }
                </Route>

                    {/* <Route exact path="/list/" component={ List } /> */}
                
                <Route exact path="/list/:itemid" component={ Item } />
                

            </ul>
        </BrowserRouter>
    );
}
