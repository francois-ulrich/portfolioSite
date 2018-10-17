import * as React from "react";
import {Col} from 'reactstrap';

import PortfolioFilter from "./PortfolioFilter/PortfolioFilter";

interface PortfolioFiltersContainerProps{
    filters: any,
}

export default class PortfolioFiltersContainer extends React.Component<PortfolioFiltersContainerProps,{}>{
    constructor(props:PortfolioFiltersContainerProps){
        super(props);
    }

    render(){
        const filters:Array<Object> = [];
        let key = 1;

        for (let filter of this.props.filters) {
            filters.push( <PortfolioFilter name={filter.name} key={key++}/> );
        }

        return (
            <Col md={2} className="portfolioFiltersContainer">
                {filters}
            </Col>
        );
    }
}