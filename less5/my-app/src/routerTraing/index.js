import React from 'react';
import { BrowserRouter,  Route, NavLink, Switch } from 'react-router-dom';
import './style.css'

import { HomePage, List, Item, About, Contacts, NotFound } from './components';

export const RouterTreining = () => {

    return (
        <BrowserRouter>
            <h2>My first router</h2>
            <Route path='/'>
                <div className='link'>
                    <NavLink to='/'>HomePage</NavLink>
                    <NavLink to='/list'>List</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contacts'>Contacts</NavLink>
                </div>
            </Route>

            <Switch>
                <Route exact path="/" component={ HomePage } />
                <Route path="/list" component={ List } />
                <Route exact path="/about" component={ About } />
                <Route exact path="/contacts" component={ Contacts } />

                <Route component={ NotFound }/>
            </Switch>

        </BrowserRouter>
    );
}

