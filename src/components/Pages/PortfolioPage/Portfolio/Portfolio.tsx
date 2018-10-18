import * as React from "react";
import {Row, Col} from 'reactstrap';

/*
import PortfolioElementsContainer from "./PortfolioElementsContainer/PortfolioElementsContainer";
import PortfolioFiltersContainer from "./PortfolioFiltersContainer/PortfolioFiltersContainer";
*/

import PortfolioElement from "./PortfolioElement/PortfolioElement";
import PortfolioFilter from "./PortfolioFilter/PortfolioFilter";

interface PortfolioProps{
    filters: {
        categories:Array<any>,
        technologies:Array<any>,
    },
    elements:Array<any>
}

interface PortfolioState{
    elements:Array<any>
    filters: {
        categories:Array<any>,
        technologies:Array<any>,
    },
    toggleFilters:boolean,
}

export default class Portfolio extends React.Component<PortfolioProps,PortfolioState>{
    constructor(props:PortfolioProps){
        super(props);

        this.toggleFilters = this.toggleFilters.bind(this);

        this.state = {
            elements:[],
            filters: {
                categories:[],
                technologies:[],
            },
            toggleFilters: true,
        }

        /*
        this.state = {
            elements:this.props.elements,
            filters: {
                categories:this.props.filters.categories,
                technologies:this.props.filters.technologies,
            },
            toggleFilters: true,
        }
        */
    }

    toggleFilters(){
        this.setState({
            toggleFilters: !this.state.toggleFilters,
        });
    }

    render(){
        const elements:Array<Object> = [];
        const categoriesFilters:Array<Object> = [];
        const technologiesFilters:Array<Object> = [];

        let key = 0;
        for (let element of this.state.elements) {
            elements.push( 
                <PortfolioElement 
                title={element.title} 
                description={element.description} 
                url={element.url} 
                key={key++}/> 
            );
        }

        key = 0;
        for (let filter of this.state.filters.categories) {
            categoriesFilters.push( <PortfolioFilter name={filter.name} key={key++}/> );
        }

        key = 0;
        for (let filter of this.state.filters.technologies) {
            technologiesFilters.push( <PortfolioFilter name={filter.name} key={key++}/> );
        }

        var filtersContainer = (
            <Col md={2} className="portfolioFiltersContainer">
                <h5>Catégories</h5>
                {categoriesFilters}

                <br/>

                <h5>Technologies</h5>
                {technologiesFilters}
            </Col>
        );

        return (
            <div className="portfolio">
                <h1>Portfolio</h1>

                <button onClick={this.toggleFilters}>Toggle filters</button>
                
                <Row>
                    {this.state.toggleFilters ? filtersContainer : null}
                    <Col md={this.state.toggleFilters?10:12} className="portfolioElementsContainer">
                        {elements}
                    </Col>
                </Row>
            </div>
        );
    }
}