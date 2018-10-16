import * as React from "react";
import {Container} from 'reactstrap';
import {BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./Header/Header";

import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

export default class Root extends React.Component{
    render(){
        return (
            <div className="website">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Container className="websiteContainer">
                            <Switch>
                                <Route path="/" component={Portfolio} />
                                <Route path="/portfolio" component={Home} />
                                <Route component={PageNotFound} />
                            </Switch>
                        </Container>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}