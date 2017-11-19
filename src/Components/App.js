import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import Transaction from './Transaction'
import History from './History'
import Login from './Login'
import Register from './Register'
import axios from 'axios';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header username = {this.state.userId} onClick={()=>this.logout()}/>
                <Switch>
                    <Route exact path="/" render={() => (
                        this.state.userId ? (
                            <Redirect to="/dashboard"/>
                        ) : (
                            <Redirect to="/login"/>
                        ))}/>
                    <Route exact path="/dashboard" render={() => (
                        this.state.userId ? (
                            <Dashboard userId={this.state.userId}/>
                        ) : (
                            <Redirect to="/login"/>
                        ))}/>
                    <Route path="/transaction" render={() => (
                        this.state.userId ? (
                            <Transaction userId={this.state.userId}/>
                        ) : (
                            <Redirect to="/login"/>
                        ))}/>
                    <Route path="/history" render={() => (
                        this.state.userId ? (
                            <History userId={this.state.userId}/>
                        ) : (
                            <Redirect to="/login"/>
                        ))}/>
                    <Route path="/login" render={() => (
                        this.state.userId ? (
                        <Redirect to="/dashboard"/>
                        ) : (
                        <Login onclick={(username,password)=> this.login(username,password)}/>
                        ))}/>
                    <Route path="/register" render={() => (
                        this.state.userId ? (
                            <Redirect to="/dashboard"/>
                        ) : (<Register onclick={(username,password)=>this.register(username,password)}/>))}/>
                </Switch>
                <hr/>
                <Footer/>
            </div>
        );
    }

    constructor(props){
        super(props);

        this.state = {
            username: null,
            userId: null,
            balance: 0,
        }
    }
    logout(){
        this.setState({
            username: null,
            userId: null,
        })
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
        console.log("un: " + username + " pass   "+ password);
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
        }else{
            alert(response.data.message)
        }
    }
}

export default App;
