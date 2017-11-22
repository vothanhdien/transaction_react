/**
 * Created by HP on 22/11/2017.
 */
import React, { Component } from 'react';
import SubMenu from './SubMenu'
import axios from 'axios'
class Sent_history extends Component{
    render(){
        return(
            <div className="row">
                <div className=" col-sm-2 col-lg-2">
                    <SubMenu/>
                </div>
                <div className="col-sm-10 col-lg-10">
                    <div className="col-md-4 offset-md-4 offset-lg-4 login-form">
                        <h1>Account Detail</h1>
                        <span>Wallet ID </span>
                        <input className="walletid" defaultValue={this.props.userId} readOnly={true}/>
                    </div>
                </div>
            </div>
        )
    }
    constructor(props){
        super(props);
        this.state = {
            history:[],
        };
        this.initHistoryList();
    }
    initHistoryList(){
        axios({
            method: 'GET',
            url: 'http://localhost:3000/api/transaction/search/all?sender=' + this.props.userId,
        }).then((res)=>this.setState({
            history: res.data,
        }))
            .catch(function (error) {
                alert(error);
            });
    }
}
export default Sent_history;