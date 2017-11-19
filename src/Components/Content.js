/**
 * Created by HP on 19/11/2017.
 */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DashBoard from './Dashboard'
import Transaction from './Transaction'
import History from './History'
import Login from './Login'
import Register from './Register'
const Content = ()=>(
    <main>
        <Switch>
            <Route exact path="/" component={ DashBoard }/>
            <Route path="/transaction" component={ Transaction } />
            <Route path="/history" component={ History } />
            <Route path="/login" component={ Login } />
            <Route path="/register" component={ Register } />
        </Switch>
    </main>
);


export default Content;

