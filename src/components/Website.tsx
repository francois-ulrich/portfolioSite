import * as React from "react";
import Header from "./Header/Header";

import "./Website.scss";

export default class Website extends React.Component{
    render(){
        return (
            <div className="website">
                <Header/>
            </div>
        );
    }
}
