import * as React from "react";
import {Col} from 'reactstrap';

import PortfolioElement from "./PortfolioElement/PortfolioElement";

interface PortfolioFiltersContainerProps{
    elements: any,
}

export default class PortfolioElementsContainer extends React.Component<PortfolioFiltersContainerProps>{
    constructor(props:PortfolioFiltersContainerProps){
        super(props)
    }

    render(){
        const elements:Array<Object> = [];
        let key = 1;

        for (let element of this.props.elements) {
            elements.push( 
                <PortfolioElement 
                title={element.title} 
                description={element.description} 
                url={element.url} 
                key={key++}/> 
            );
        }

        return (
            <Col md={10} className="portfolioElementsContainer">
                {elements}
            </Col>
        );
    }
}