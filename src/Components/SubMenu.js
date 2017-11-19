/**
 * Created by HP on 19/11/2017.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SubMenu extends Component{
    render(){
        return(
            <div className="left-menu">
                <div className="card">
                    <div className="card-header">Menu</div>
                    <div className="card-block">
                        <ul className="list">
                            <li>
                                <Link to="/">
                                    <button id="option1"
                                            className="btn btn-success-outline option"
                                            onClick={()=>this.select("option1")}> Dashboard </button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/transaction">
                                    <button id="option2"
                                            className="btn btn-success-outline option"
                                            onClick={()=>this.select("option2")}>  Transact </button>
                                </Link>

                            </li>
                            <li>
                                <Link to="/History">
                                    <button id="option3"
                                            className="btn btn-success-outline option"
                                            onClick={()=>this.select("option3")}> History </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    select(id){

        if(document.getElementsByClassName("btn-selected").length > 0){
            document.getElementsByClassName("btn-selected")[0].classList.remove("btn-selected");
        }
        document.getElementById(id).classList.add("btn-selected");
    }
}
export default SubMenu;
