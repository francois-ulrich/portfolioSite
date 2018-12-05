import * as React from "react";
import { Col } from "reactstrap";

import HeaderNav from "./HeaderNav/HeaderNav";

export default class HeaderRight extends React.Component {
    render(){
        return (
            <Col className="headerRight d-flex align-items-center" md={{size: 4, offset: 5}}>
                <HeaderNav/>
            </Col>
        );
    }
}