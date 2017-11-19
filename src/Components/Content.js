/**
 * Created by HP on 19/11/2017.
 */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import Transaction from './Transaction'
import History from './History'
import Login from './Login'
import Register from './Register'
import axios from 'axios';
class Content extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" render={() => (
                        this.props.userId ? (
                            <Redirect to="/dashboard"/>
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route exact path="/dashboard" render={() => (
                        this.props.userId ? (
                            <Dashboard/>
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route path="/transaction" render={() => (
                        this.props.userId ? (
                            <Transaction/>
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route path="/history" render={() => (
                        this.props.userId ? (
                            <History/>
                        ) : (
                            <Redirect to="/login"/>
                        )
                    )}/>
                    <Route path="/login" render={() => <Login onclick={(username,password)=> this.login(username,password)}/>}/>
                    <Route path="/register" render={() => <Register onclick={(username,password)=>this.register(username,password)}/>}/>
                </Switch>
            </main>
        );
    }
    login(username,password){

    }
    register(username,password){
        console.log("un: " + username + " pass   "+password);
        axios({
            method: 'POST',
            url: 'http://localhost:3001/api/account/register',
            data:{
                username: username,
                password: password,
            }
        }).then(function (res) {
            alert(res);
        })
            .catch(function (error) {
                alert(error);
            });
    }
}
export default Content;

