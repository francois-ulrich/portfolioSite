import * as React from "react";

var imgLogo = require("./../../../../img/logo.png");

interface Props{
    text:string,
}

export default class HeaderLogo extends React.Component<Props> {
    render(){
        return (
            <a className="headerLogo d-flex align-items-center">
                <img src={imgLogo} className="headerLogoImage"/>
                <span className="headerLogoText">{this.props.text}</span>
            </a>
        );
    }
}