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
                        <Link to="/login">Login</Link>
                        <span> or </span>
                        <Link to="/register">Register</Link>
                    </div>
                )
            }else{
                return(
                    <div className="act">
                        <Link to="/Login" onClick={()=>this.props.onClick()}>Logout</Link>
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