/**
 * Created by HP on 19/11/2017.
 */
import React, { Component } from 'react';

import SubMenu from './SubMenu'

class Dashboard extends Component{
    render(){
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
                                    <p className="money-value">20000$</p>
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
                                        <tr>
                                            <td>123</td>
                                            <td>123</td>
                                            <td>123</td>
                                        </tr>
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
                                        <tr>
                                            <td>123</td>
                                            <td>123</td>
                                            <td>123</td>
                                        </tr>
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
}

export default Dashboard