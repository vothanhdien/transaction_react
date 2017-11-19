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
                            <div className="card-header">Chuyen tien</div>
                            <div className="card-block ">
                                <p className="money-value">ho ten</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default  Transaction;