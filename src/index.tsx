import * as React from "react";
import * as ReactDOM from "react-dom";

// Load french locale React Moment
import 'moment/locale/fr';

import Root from "./components/Root";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import './fonts/fonts.scss';

const content = <Root />;

ReactDOM.render(
    content, 
    document.getElementById('root')
);