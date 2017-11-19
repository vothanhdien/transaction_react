/**
 * Created by HP on 19/11/2017.
 */
import React, { Component } from 'react';

import SubMenu from './SubMenu'
import axios from 'axios';

class Dashboard extends Component{
    render(){
        const sent_history = this.state.sent;
        const reveived_history = this.state.received;

        let sent = sent_history.map((doc,index)=>{
           return(
               <tr key={index}>
                   <td>{doc.receiver}</td>
                   <td>{doc.value}</td>
                   <td>{doc.time}</td>
               </tr>
           )
        });
        let received = reveived_history.map((doc,index)=>{
            return(
                <tr key={index}>
                    <td>{doc.sender}</td>
                    <td>{doc.value}</td>
                    <td>{doc.time}</td>
                </tr>
            )
        });
        return(
            <div className="row">
                <div className=" col-sm-2 col-lg-2">
                    <SubMenu value="option1"/>
                </div>
                <div className="col-sm-10 col-lg-10">
                    <div className="Dashboard">
                        <div className="row">
                            <div className="card balance">
                                <div className="card-header">So du tai khoan</div>
                                <div className="card-block ">
                                    <p className="money-value">{this.state.balance}$</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <div className="card-header send-history">Cac khoan chuyen</div>
                                <div className="card-block">
                                    <table className="table">
                                        <tr>
                                            <th>Người nhận</th>
                                            <th>Số tiền</th>
                                            <th>Thời gian</th>
                                        </tr>
                                        <tbody>
                                        {sent}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md">
                                <div className="card-header receive-history">Cac khoan nhan</div>
                                <div className="card-block">
                                    <table className="table">
                                        <tr>
                                            <th>Người gửi</th>
                                            <th>Số tiền</th>
                                            <th>Thời gian</th>
                                        </tr>
                                        <tbody>
                                        {received}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    constructor(props) {
        super(props);
        this.state = {
            sent: [],
            received: [],
            balance: 0,
        };
        this.updateBalance();
        this.updateSentHistory();
        this.updateReceivedHistory();
    }
    updateBalance() {
        axios({
            method: 'POST',
            url: 'http://localhost:3000/api/account/search',
            data:{
                userId: this.props.userId,
            }
        }).then((res)=>this.setState({
            balance: res.data.message,
        }))
            .catch(function (error) {
                alert("error" + error);
            });
    }
    updateSentHistory() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/api/transaction/search?sender=' + this.props.userId,
        }).then((res)=>this.setState({
            sent: res.data,
        }))
            .catch(function (error) {
                alert(error);
            });
    }
    updateReceivedHistory() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/api/transaction/search?receiver=' + this.props.userId,
        }).then((res)=>this.setState({
            received: res.data,
        }))
            .catch(function (error) {
                alert(error);
            });
    }
}

export default Dashboard