'use strict';
/*  eslint-disable no-unused-vars */
/*  eslint-disable no-undef */

import React, { /*useEffect,*/ useState } from "react";
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
import './app.scss';

class Blotter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { make: "Toyota", model: "Celica", price: 35000 },
                { make: "Ford", model: "Mondeo", price: 32000 },
                { make: "Porsche", model: "Boxter", price: 72000 },
                { make: "Porsche", model: "Boxter", price: 72000 }
            ]
        };
    }

    render() {
        return (
            <div className='ag-theme-balham-dark'
                style={{ height: 400 }}>
                <AgGridReact
                    rowData={this.props.ItemsSource}>
                    <AgGridColumn field="make"></AgGridColumn>
                    <AgGridColumn field="model"></AgGridColumn>
                    <AgGridColumn field="price"></AgGridColumn>
                </AgGridReact>
            </div>
        );
    }
}

export default Blotter;
