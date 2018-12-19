import * as React from "react";
import { Container, Row } from "reactstrap";

import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

//import 'bootstrap-css-only';

interface HeaderState{
    open: boolean,
}

export default class Header extends React.Component<any,HeaderState>{
    constructor(props:any){
        super(props);
        
        this.state = {
            open: false,
        }
    }

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