/**
 * Created by HP on 19/11/2017.
 */
import React, { Component } from 'react';
class LoginForm extends Component{
    render(){
        return(
            <div className="row form">
                <div className="col-md-4 offset-md-4 offset-lg-4">
                    <div className="row">
                        <div className="col-3">
                            <p>Username </p>

                        </div>
                        <div className="col-9">
                            <input type="text" name="" id="input" className="form-control" required="required">
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <p>Password </p>

                        </div>
                        <div className="col-9">
                            <input type="password" name="" id="input" className="form-control" required="required">
                            </input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 offset-md-9">
                            <button className="btn btn-login">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm