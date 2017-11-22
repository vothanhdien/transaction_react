/**
 * Created by HP on 19/11/2017.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Header extends Component{
    render(){
        const act = ()=>{
            if(this.props.username === null)
            {
                return(
                    <div className="act">

                    </div>
                )
            }else{
                return(
                    <div className="act">
                        <div className="act">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false">
                                    Account
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <Link to="/detail" className="dropdown-item">
                                        Detail
                                    </Link>
                                    <Link to="/login" className="dropdown-item" onClick={()=>this.props.onClick()}>
                                        Log out
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        };
        return(
            <div className="navbar navbar-light App-header">
                <Link to="/">Navbar</Link>
                <div>
                    {act()}
                </div>
            </div>
        )
    }
}
export default Header;