/**
 * Created by HP on 19/11/2017.
 */
import React, { Component } from 'react';
import {Link} from "react-router-dom"
class RegisterForm extends Component{
    render(){
        return(
            <div className="row form">
                <div className="col-md-4 offset-md-4 offset-lg-4 login-form">
                    <div className="row">
                        <div className="col-1">
                            <h1><b>Register</b></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 info-hide">
                            <span id="info-text"></span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p>Email </p>
                        </div>
                        <div className="col-9">
                            <input type="text" name="" id="email" className="form-control" required="required">
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
                            <button className="btn btn-register" onClick={()=>this.register()}>Register</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-7">
                            <Link to="/login"><span>Already have account? Login</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    register(){
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        if(email.length <= 0  || password <= 0)
            alert("Fill all the blank");
        else{
            this.props.onclick(email,password);
        }
    }
}


export default RegisterForm