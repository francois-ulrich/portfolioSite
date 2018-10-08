import * as React from "react";
import * as ReactDOM from "react-dom";

import Header from "./components/Header/Header";

const element = <Header name="fran" />;

ReactDOM.render(
    element, 
    document.getElementById('root')
);