import * as React from "react";
import { Col } from "reactstrap";

import HeaderNav from "./HeaderNav/HeaderNav";

// Links in header
const links = require("./../links.json");

interface HeaderRightProps{
    open:boolean,
    toggleMenu:() => void,
}

export default class HeaderRight extends React.Component<HeaderRightProps> {
    render(){
        return (
            <Col className={"headerRight d-flex align-items-center" + (this.props.open?" active":"")} md={{size: 5, offset: 0}} lg={{size: 5, offset: 2}} xl={{size: 4, offset: 4}}>
                <HeaderNav/>
            </Col>
        );
    }
}