import * as React from "react";
import {Row} from 'reactstrap';

import PortfolioElementsContainer from "./PortfolioElementsContainer/PortfolioElementsContainer";
import PortfolioFiltersContainer from "./PortfolioFiltersContainer/PortfolioFiltersContainer";

const portfolioTechnologiesFilters = require("./portfolioTechnologiesFilters.json");
const portfolioElements = require("./portfolioElements.json");

export default class Portfolio extends React.Component{
    render(){
        return (
            <div className="portfolio">
                <h1>Portfolio</h1>

                <Row>
                    <PortfolioFiltersContainer filters={portfolioTechnologiesFilters}/>
                    <PortfolioElementsContainer elements={portfolioElements}/>
                </Row>
            </div>
        );
    }
}