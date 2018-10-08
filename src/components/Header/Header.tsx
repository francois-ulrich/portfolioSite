import * as React from "react";

import "./HeaderStyle.scss";

interface Props{
    name: string,
};

export default class Header extends React.Component<Props, {}> {
    render(){
        return (
            <header>
                <p> 
                    {this.props.name} 
                </p>
            </header>
        );
    }
}