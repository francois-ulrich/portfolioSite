import * as React from "react";

import "./HeaderLogo.scss";
var logo = require("./logo.png");

interface Props{
    text:string,
}

export default class HeaderLogo extends React.Component<Props> {
    render(){
        return (
            <a className="headerLogo d-flex align-items-center">
                <img src={logo} className="headerLogoImage"/>
                <span className="headerLogoText">{this.props.text}</span>
            </a>
        );
    }
}