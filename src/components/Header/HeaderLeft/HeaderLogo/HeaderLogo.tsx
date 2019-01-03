import * as React from "react";
import { NavLink  } from "react-router-dom";

var imgLogo = require("./../../../../img/logo.png");

interface Props{
    text:string,
}

export default class HeaderLogo extends React.Component<Props> {
    render(){
        return (
            <NavLink to="/" exact={true} className="headerLogo d-flex justify-content-sm-center align-items-center">
                <img src={imgLogo} className="headerLogoImage"/>
                <span className="headerLogoText">{this.props.text}</span>
            </NavLink>
        );
    }
}