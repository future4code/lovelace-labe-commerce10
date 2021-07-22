import React, { Component } from 'react';
import logo from "./../../img/logo.jpg";
import { NavBar } from './ecommerce.styleNav';

export default class ecommerceNav extends Component {
    render() {
        return (
            <NavBar className="nav">
                <div className="nav__blocks">
                    <img src={logo}/>
                </div>
                <div className="nav__blocks"></div>
                <div className="nav__blocks"></div>                
            </NavBar>
        )
    }
}
