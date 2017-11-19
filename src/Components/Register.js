/**
 * Created by HP on 19/11/2017.
 */
import React, { Component } from 'react';

class RegisterForm extends Component{
    render(){
        return(
            <div className="row form">
                <div className="col-md-4 offset-md-4 offset-lg-4">
                    <div className="row">
                        <div className="col-3">
                            <p>Username </p>

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
                            <button className="btn btn-register" onClick={()=>this.register()}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    register(){
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        if(username.length <= 0  || password <= 0)
            alert("Fill all the blank");
        else{
            this.props.onclick(username,password);
        }
    }
}


export default RegisterForm