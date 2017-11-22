/**
 * Created by HP on 19/11/2017.
 */
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class LoginForm extends Component{
    render(){
        return(
            <div className="row form">
                <div className="col-md-4 offset-md-4 offset-lg-4 login-form">
                    <div className="row">
                        <div className="col-1">
                            <h1><b>Login</b></h1>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 info-hide">
                            <span id="info-text"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p>Wallet ID </p>

                        </div>
                        <div className="col-9">
                            <input type="text" name="" id="username" className="form-control" required="required">
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p>Password </p>

                        </div>
                        <div className="col-9">
                            <input type="password" name="" id="password" className="form-control" required="required">
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 offset-md-9">
                            <button className="btn btn-login" onClick={()=>this.login()}>Login</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <Link to="/register"><span>Don't have account? Create one</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    login(){
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        if(username.length <= 0  || password <= 0)
            this.props.showError("fill all blanks");
        else{
            this.props.onclick(username,password);
        }
    }
}

export default LoginForm