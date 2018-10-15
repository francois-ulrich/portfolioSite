import * as React from "react";
//import { Col } from "reactstrap";

import "./HeaderNav.scss";

export default class HeaderNav extends React.Component {
    render(){
        return (
            <nav className="headerNav">
                <a href="#">À propos</a>
                <a href="#">Parcours</a>
                <a href="#">Portfolio</a>
            </nav>
        );
    }
}