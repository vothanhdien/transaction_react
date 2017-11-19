/**
 * Created by HP on 19/11/2017.
 */
import React, { Component } from 'react';


class Footer extends Component{
    render() {
        return(
            <footer className="row">
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <ul>
                        <li> <b> Contact us</b> </li>
                        <li> <a href="/"> email </a></li>
                        <li> <a href="/ "> phone </a></li>
                    </ul>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2">
                    <ul>
                        <li> <b> Subcribe</b> </li>
                        <li> <a href="/"> onFacebook </a></li>
                        <li> <a href="/"> onYouTube </a></li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Footer;