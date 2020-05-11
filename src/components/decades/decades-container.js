import React, { Component } from 'react';

import Decades from "./decades";

export default class DecadesContainer extends Component {
    constructor() {
        super();

        this.state = {
            data:[                
                //{title: "Welcome to horrified, a fan's website. This website will show the top grossing horror movie of each year of the last four decades.", category: "Horrified"}
                //{title: "1990", category:"Nineties"},
                //{title: "2000", category:"Two-Thousands"},
                //{title: "2010", category:"Twenty-Tens"}
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
            <div className='decade-container'>
                <h2>{this.state.pagetitle}</h2> 

                
               {this.decades()}

            </div>
        );
    }
}