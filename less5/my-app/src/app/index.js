import React from 'react'
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';

import routes_map from '../routes_map';
import './style.css'

const ReactRouter= () => {


    return(
        <div className='wrapper'>
            <BrowserRouter>
                <div className='main-menu'>
                { 
                    routes_map.map( route => {
                        if( route.menu_title ){
                            return (
                            <Link
                                key={ route.path }
                                to={ route.path }
                            > 
                                { route.menu_title } 
                            </Link>
                            )
                        }
                    })
                }
                </div>


                <Switch>
                    {
                        routes_map.map( route => {
                            if( route.type === "public"){
                                return <Route key={route.path} {...route} />
                            }
                        })
                    }
                </Switch>


            </BrowserRouter>

        </div>
    )

}

export default ReactRouter;
