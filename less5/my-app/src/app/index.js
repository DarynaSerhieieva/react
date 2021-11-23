import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

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
                            if (route.path === '/posts/limit/:limited') {
                                return(
                                    <Link
                                        key={ route.path }
                                        to='/posts/limit/30'
                                    > 
                                        { route.menu_title } 
                                    </Link>
                                )
                            }
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
                            return (
                                <Route key={route.path} {...route} />
                            ) 
                        })
                    }
                </Switch>


            </BrowserRouter>

        </div>
    )

}

export default ReactRouter;
