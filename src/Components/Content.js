/**
 * Created by HP on 19/11/2017.
 */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import Transaction from './Transaction'
import History from './Sent_history'
import Login from './Login'
import Register from './Register'
import axios from 'axios';
class Content extends Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" render={() => (
                        this.state.userId ? (
                            <Redirect to="/dashboard"/>
                        ) : (
                            <Redirect to="/login"/>
                        ))}/>
                    <Route exact path="/dashboard" render={() => (
                        this.props.userId ? (
                            <Dashboard userId={this.state.userId}/>
                        ) : (
                            <Redirect to="/login"/>
                        ))}/>
                    <Route path="/transaction" render={() => (
                        this.props.userId ? (
                            <Transaction userId={this.state.userId}/>
                        ) : (
                            <Redirect to="/login"/>
                        ))}/>
                    <Route path="/history" render={() => (
                        this.props.userId ? (
                            <History userId={this.state.userId}/>
                        ) : (
                            <Redirect to="/login"/>
                        ))}/>
                    <Route path="/login" render={() => (
                        this.props.userId ? (
                            <Redirect to="/dashboard"/>
                        ) : (
                            <Login onclick={(username,password)=> this.login(username,password)}/>
                        ))}/>
                    <Route path="/register" render={() => <Register onclick={(username,password)=>this.register(username,password)}/>}/>
                </Switch>
            </main>
        );
    }
    constructor(props){
        super(props);
        this.state = {
            userId: this.props.userId,
        }
    }
    login(username,password){
        // this.router.push('/dashboard');
        // this.setState({
        //     userId: 123123,
        // });
        axios({
            method: 'POST',
            url: 'http://localhost:3000/api/account/login',
            data:{
                username: username,
                password: password,
            }
        }).then((res)=>this.changeUserId(res))
            .catch(function (error) {
                alert("erroe" + error);
            });
    }
    register(username,password){
        console.log("un: " + username + " pass   "+password);
        axios({
            method: 'POST',
            //url: 'https://api.instagram.com/v1/locations/search?lat=10&lng=106&access_token=6079293844.e029fea.3d779429f5ad4b0fba9d206abacc3e1c',
            url:"http://localhost:3000/api/account/register",
            data:{
                username: username,
                password: password,
            }
        }).then((res)=>this.changeUserId(res))
            .catch(function (error) {
                alert(error);
            });
    }
    changeUserId(response){
        if(response.data.status === 'success'){
            this.setState({
                userId: response.data.message,
            });
            alert('done');
        }else{
            alert(response.data.message)
        }
    }
}
export default Content;

