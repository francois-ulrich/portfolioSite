import * as React from "react";
import * as ReactDOM from "react-dom";

import Website from "./components/Website";

import 'bootstrap-css-only';

const content = <Website />;

ReactDOM.render(
    content, 
    document.getElementById('root')
);