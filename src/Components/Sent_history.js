/**
 * Created by HP on 19/11/2017.
 */
import React, { Component } from 'react';
import SubMenu from './SubMenu'
import axios from 'axios'
class Sent_history extends Component{
    render(){
        const HistoryList = this.state.history;
        let history = HistoryList.map((doc,index)=>{
            let date = this.props.convertTime(doc.time);
            return(
                <tr key={index}>
                    <td>{doc.receiver}</td>
                    <td>{doc.value}</td>
                    <td>{date}</td>
                </tr>
            )
        });
        return(
            <div className="row">
                <div className=" col-sm-2 col-lg-2">
                    <SubMenu value="option3"/>
                </div>
                <div className="col-sm-10 col-lg-10">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Receiver</th>
                            <th>Value</th>
                            <th>Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        {history}
                        </tbody>
                    </table>
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