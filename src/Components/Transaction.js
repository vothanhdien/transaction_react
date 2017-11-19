/**
 * Created by HP on 19/11/2017.
 */
import React, { Component } from 'react';
import SubMenu from './SubMenu'
class Transaction extends Component{
    render(){
        return(
            <div className="row">
                <div className="col-sm-2 col-lg-2">
                    <SubMenu value="option2"/>
                </div>
                <div className="col-sm-10 col-lg-10">
                    <div className="row">
                        <div className="card balance">
                            <div className="card-header">Chuyển tiền</div>
                            <div className="card-block ">
                                <div className="row">
                                    <div className="col-3">
                                        <p>Người nhận </p>
                                    </div>
                                    <div className="col-9">
                                        <input type="text" name="" id="username" className="form-control" required="required">
                                        </input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <p>Số tiền </p>
                                    </div>
                                    <div className="col-9">
                                        <input type="number" name="" id="value" className="form-control" required="required">
                                        </input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 offset-md-3">
                                        <button className="btn btn-login" onClick={()=>this.send()}>Gửi</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    send(){
        alert("send");
    }
}
export default  Transaction;