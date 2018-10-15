import * as React from "react";
import Header from "./Header/Header";

import * as styles from './Website.scss';

export default class Website extends React.Component{
    render(){
        return (
            <div className={styles.website}>
                <Header/>
            </div>
        );
    }
}
