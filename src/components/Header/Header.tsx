import * as React from "react";
import { Container, Row } from "reactstrap";

import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

//import 'bootstrap-css-only';

export default class Header extends React.Component {
    render(){
        return (
            <header>
                <Container>
                    <Row>
                        <HeaderLeft/>
                        <HeaderRight/>
                    </Row>
                </Container>
            </header>
        );
    }
}