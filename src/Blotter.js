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
    }

    render() {
        return (
            <div className='ag-theme-balham-dark'
                style={{ height: 350 }}>
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
