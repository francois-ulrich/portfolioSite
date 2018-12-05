import * as React from "react";
import {Row, Col} from 'reactstrap';

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
    filters: {
        categories:Array<any>,
        technologies:Array<any>,
    },
    elements:Array<any>,
    toggleFilters:boolean,
}

export default class Portfolio extends React.Component<PortfolioProps,PortfolioState>{
    constructor(props:PortfolioProps){
        super(props);

        this.toggleFilters = this.toggleFilters.bind(this);

        this.state = {
            filters: JSON.parse(JSON.stringify(this.props.filters)),
            elements:this.props.elements,
            toggleFilters: true,
        }
    }

    toggleFilters(){
        this.setState({
            toggleFilters: !this.state.toggleFilters,
        });
    }

    updateFiltersCategories = (event:React.ChangeEvent<HTMLInputElement>,id:number) => {
        var filterIndex:number = null;

        // Search for filter
        for(let i=0 ; i<this.state.filters.categories.length ; i++){
            let currentCategory = this.state.filters.categories[i];
            // If currentCategory.id is the ID of the clicked filter
            if(currentCategory.id == id){
                filterIndex = i;
                break;
            }
        }

        let newCategoriesList = JSON.parse(JSON.stringify( this.state.filters.categories ));

        if(filterIndex!=null){
            console.log("remove: " + filterIndex);
            newCategoriesList.splice(filterIndex,1);

            this.setState({
                filters: {
                    ...this.state.filters,
                    categories: newCategoriesList,
                },
            });
        }else{
            console.log("add");
            // Add if not in list
            for(let i=0 ; i<this.props.filters.categories.length ; i++){
                let categoryToAdd = this.props.filters.categories[i];
                
                if(categoryToAdd.id == id){
                    newCategoriesList.push(categoryToAdd);

                    this.setState({
                        filters: {
                            ...this.state.filters,
                            categories: newCategoriesList,
                        },
                    });
        
                    break;
                }
            }
        }
    }

    updateFiltersTechnologies = (event:React.ChangeEvent<HTMLInputElement>,id:number) => {
        var filterIndex:number = null;

        // Search for filter
        for(let i=0 ; i<this.state.filters.technologies.length ; i++){
            let currentCategory = this.state.filters.technologies[i];
            // If currentCategory.id is the ID of the clicked filter
            if(currentCategory.id == id){
                filterIndex = i;
                break;
            }
        }

        let newTechnologiesList = JSON.parse(JSON.stringify( this.state.filters.technologies ));

        if(filterIndex!=null){
            console.log("remove: " + filterIndex);
            newTechnologiesList.splice(filterIndex,1);

            this.setState({
                filters: {
                    ...this.state.filters,
                    technologies: newTechnologiesList,
                },
            });
        }else{
            console.log("add");
            // Add if not in list
            for(let i=0 ; i<this.props.filters.technologies.length ; i++){
                let technologyToAdd = this.props.filters.technologies[i];
                
                if(technologyToAdd.id == id){
                    newTechnologiesList.push(technologyToAdd);

                    this.setState({
                        filters: {
                            ...this.state.filters,
                            technologies: newTechnologiesList,
                        },
                    });
        
                    break;
                }
            }
        }
    }

    render(){
        const elements:Array<Object> = [];
        const categoriesFilters:Array<Object> = [];
        const technologiesFilters:Array<Object> = [];

        // List of elements
        let key = 0;

        for (let element of this.props.elements) {
            var inActiveCategories = false,
            inActiveTechnologies = false;

            //Check if element is in the list of active categories
            for(let category of this.state.filters.categories){
                if(element.category_id == category.id){
                    inActiveCategories = true;
                    break;
                }
            }

            //Check if element is in the list of active technologies
            for(let technologiesFilter of this.state.filters.technologies){
                for(let elementTechnology of element.technologies){
                    if(technologiesFilter.id == elementTechnology.id){
                        inActiveTechnologies = true;
                        break;
                    }
                }
            }

            // If the element is not filtered
            if (inActiveCategories && inActiveTechnologies) {
                // Push the element into the list
                elements.push( 
                    <PortfolioElement 
                    title={element.title} 
                    description={element.description} 
                    url={element.url}
                    imgUrl={element.imgUrl}
                    technologies={element.technologies}
                    key={key++}/> 
                );
            }

        }

        // List of categories filters
        key = 0;
        //console.log( this.state.filters.categories.length );
        for (let filter of this.props.filters.categories) {
            categoriesFilters.push( 
                <PortfolioFilter 
                id={filter.id} 
                name={filter.name} 
                activeFilters={this.state.filters.categories} 
                toggleActive={this.updateFiltersCategories}
                key={key++} 
                />
            );
        }

        // List of technologies filters
        key = 0;
        for (let filter of this.props.filters.technologies) {
            technologiesFilters.push( 
                <PortfolioFilter 
                id={filter.id} 
                name={filter.name} 
                activeFilters={this.state.filters.technologies} 
                toggleActive={this.updateFiltersTechnologies}
                key={key++} 
                /> 
            );
        }

        // Filter container content
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

                {/* <button onClick={this.toggleFilters}>Toggle filters</button> */}
                
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

