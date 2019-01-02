import * as React from "react";
import { Container, Row } from "reactstrap";

import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

//import 'bootstrap-css-only';

interface HeaderState{
    open: boolean,
}

// export default class Header extends React.Component<any,HeaderState>{
export default class Header extends React.Component<any,HeaderState>{
    constructor(props:any){
        super(props);
        
        this.state = {
            open: false,
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.setState({
            open: !this.state.open,
        });
    }

    render(){
        return (
            <div>
                <div className="headerSpace"/>
                <header>
                    <Container>
                        <Row>
                            <HeaderLeft toggleMenu={this.toggleMenu}/>
                            <HeaderRight open={this.state.open} toggleMenu={this.toggleMenu}/>
                        </Row>
                    </Container>
                </header>
            </div>
        );
    }
}