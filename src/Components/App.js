import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './Dashboard'
import Transaction from './Transaction'
import SentHistory from './Sent_history'
import ReceivedHistory from './Received_history'
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
                            <Dashboard userId={this.state.userId}
                                       convertTime={(time)=>this.convertTime(time)}/>
                        ) : (
                            <Redirect to="/login"/>
                        ))}/>
                    <Route path="/transaction" render={() => (
                        this.state.userId ? (
                            <Transaction userId={this.state.userId}/>
                        ) : (
                            <Redirect to="/login"/>
                        ))}/>
                    <Route path="/sent_history" render={() => (
                        this.state.userId ? (
                            <SentHistory userId={this.state.userId}
                                        convertTime={(time)=>this.convertTime(time)}/>
                        ) : (
                            <Redirect to="/login"/>
                        ))}/>
                    <Route path="/received_history" render={() => (
                        this.state.userId ? (
                            <ReceivedHistory userId={this.state.userId}
                                             convertTime={(time)=>this.convertTime(time)}/>
                        ) : (
                            <Redirect to="/login"/>
                        ))}/>
                    <Route path="/login" render={() => (
                        this.state.userId ? (
                        <Redirect to="/dashboard"/>
                        ) : (
                        <Login onclick={(username,password)=> this.login(username,password)}
                               showError={(text)=> this.showError(text)}/>
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
        }).then((res)=>{
            if(res.data.status === "success"){
                this.changeUserId(res)
            }else{
                this.showError(res.data.message);
            }
            })
            .catch(function (error) {
                alert(error);
            });
    }
    register(username,password){
        // console.log("un: " + username + " pass   "+ password);
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

    showError(text){
        if(document.getElementsByClassName("info-success").length > 0){
            document.getElementsByClassName("info-success")[0].classList.add("info-error");
            document.getElementsByClassName("info-success")[0].classList.remove("info-error");
        }else if(document.getElementsByClassName("info-hide").length > 0){
            document.getElementsByClassName("info-hide")[0].classList.add("info-error");
            document.getElementsByClassName("info-hide")[0].classList.remove("info-hide");
        }
        document.getElementById("info-text").innerHTML = text;
    }
    showSuccess(){
        if(document.getElementsByClassName("info-error").length > 0){
            document.getElementsByClassName("info-error")[0].classList.add("info-success");
            document.getElementsByClassName("info-error")[0].classList.remove("info-error");
        }else if(document.getElementsByClassName("info-hide").length > 0){
            document.getElementsByClassName("info-hide")[0].classList.add("info-success");
            document.getElementsByClassName("info-hide")[0].classList.remove("info-hide");
        }
        document.getElementById("info-text").innerHTML = "Send success";
    }

    convertTime(time){
        let date = new Date(time);
        let res;
        res = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " "
            + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

        return res;
    }
}

export default App;
