import * as React from "react";
import { Col } from "reactstrap";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import "./HeaderLeft.scss";

export default class HeaderLeft extends React.Component {
    render(){
        return (
            <Col className="headerLeft align-items-center" md={4} >
                <HeaderLogo />
            </Col>
        );
    }
}