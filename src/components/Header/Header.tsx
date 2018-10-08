import * as React from "react";
import { Container, Row } from "reactstrap";

import HeaderLeft from "./HeaderLeft/HeaderLeft";
import "./Header.scss";

//import 'bootstrap-css-only';

export default class Header extends React.Component {
    render(){
        return (
            <header>
                <Container>
                    <Row>
                        <HeaderLeft/>
                    </Row>
                </Container>
            </header>
        );
    }
}