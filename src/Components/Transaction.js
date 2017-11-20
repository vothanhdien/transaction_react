/**
 * Created by HP on 19/11/2017.
 */
import React, { Component } from 'react';
import SubMenu from './SubMenu'
import axios from 'axios'
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
                                    <div className="col-7 offset-md-2 info-hide">
                                        <span id="info-text"></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <p>Người nhận </p>
                                    </div>
                                    <div className="col-5">
                                        <input type="text" name="" id="receiver" className="form-control" required="required">
                                        </input>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <p>Số tiền </p>
                                    </div>
                                    <div className="col-5">
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
        let receiver = document.getElementById("receiver").value;
        let value = parseInt(document.getElementById("value").value,0);
        if(!value || value < 0 || receiver===null){
            this.showError("Dữ liệu nhập vào không đúng");
        }else {
            axios({
                method: 'POST',
                url: 'http://localhost:3000/api/transaction/transact',
                data: {
                    sender: this.props.userId,
                    receiver: receiver,
                    value: value
                }
            }).then((res) =>{
                if(res.data.status === 'success'){
                    this.showSuccess();
                }else{
                    this.showError(res.data.message);
                }
            })
                .catch((error)=> {
                    this.showError("server error");
                });
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
}
export default  Transaction;