import * as React from "react";

import Portfolio from "./Portfolio/Portfolio";

const portfolioElements = require("./portfolioElements.json");
const portfolioCategoriesFilters = require("./portfolioCategoriesFilters.json");
const portfolioTechnologiesFilters = require("./portfolioTechnologiesFilters.json");

const propsFilters = {
    categories: portfolioCategoriesFilters,
    technologies: portfolioTechnologiesFilters
}

export default function PortfolioPage(){
    return (
        <Portfolio
            filters={propsFilters}
            elements={portfolioElements}
        />
    );
}