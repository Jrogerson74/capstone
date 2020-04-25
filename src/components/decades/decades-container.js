import React, { Component } from 'react';

import Decades from "./decades";

export default class DecadesContainer extends Component {
    constructor() {
        super();

        this.state = {
            data:[
                {title: "1980", category: "Eighties"},
                {title: "1981", category: "Eighties"},
                {title: "1982", category: "Eighties"},
                {title: "1983", category: "Eighties"},
                {title: "1990", category:"Nineties"},
                {title: "2001", category:"Two-Thousands"},
                {title: "2012", category:"Twenty-Tens"}
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }

    decades() {
        return this.state.data.map(item => {
            return <Decades title={item.title} />;
        });
    }
    
    render() {
        return (
            <div>
               <h2>{this.state.pagetitle}</h2> 

               <button onClick={() => this.handleFilter('Eighties')}>Eighties</button>
               <button onClick={() => this.handleFilter('Nineties')}>Nineties</button>
               <button onClick={() => this.handleFilter('Two-Thousands')}>Two-Thousands</button>
               <button onClick={() => this.handleFilter('Twenty-Tens')}>Twenty-Tens</button>

               {this.decades()}

            </div>
        );
    }
}