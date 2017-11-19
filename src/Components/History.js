/**
 * Created by HP on 19/11/2017.
 */
import React, { Component } from 'react';
import SubMenu from './SubMenu'
class History extends Component{
    render(){
        return(
            <div className="row">
                <div className=" col-sm-2 col-lg-2">
                    <SubMenu value="option3"/>
                </div>
                <div className="col-sm-10 col-lg-10">
                    <h1>history</h1>
                </div>
            </div>
        )
    }
}
export default History;