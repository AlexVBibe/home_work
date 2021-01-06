import React, { /*useEffect,*/ useState } from "react";
import LikeButton from './like_button.js';
import Blotter from './Blotter.js';
import BarChart from './BarChart.js';
import { ChuckNorris } from './ChuckNorris/ChuckNorris.js';
import {providerFactory} from "./Blotter/DataProvider.js";

import './app.css';

function App() {
    const [data, setData] = useState(getChartData());
    const [rowData, setRowData] = useState(providerFactory.getProvider().loadData());

    return (
        <div className='background'>
            <div className='applicationCaption'>
                <span>Homework of a course "building-development-environmen"</span>
            </div>

            <div class='backgroundDark' style={{ height: 57 }}>
                <LikeButton Content="Star match" />
                <LikeButton Content="Sea battle"/>
                <LikeButton Content="Cross game"/>
                <LikeButton Content="Chuck Norris"/>
            </div>

            <Blotter ItemsSource = {rowData} />
            <ChuckNorris />
            <div style={{ height: 350 }}>
                <BarChart
                    data={data[1].data}
                    title={data[1].title}
                    color="yellow"
                />
            </div>

        </div>
    );
}

function getChartData() {
    let data = [];

    data.push({
        title: 'Visits',
        data: getRandomDateArray(150)
    });

    data.push({
        title: 'Categories',
        data: getRandomArray(20)
    });

    data.push({
        title: 'Categories',
        data: getRandomArray(10)
    });

    data.push({
        title: 'Data 4',
        data: getRandomArray(6)
    });

    return data;
}

// Data generation
function getRandomArray(numItems) {
    // Create random array of objects
    let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let data = [];
    for (var i = 0; i < numItems; i++) {
        data.push({
            label: names[i],
            value: Math.round(20 + 80 * Math.random())
        });
    }
    return data;
}

function getRandomDateArray(numItems) {
    // Create random array of objects (with date)
    let data = [];
    let baseTime = new Date('2018-05-01T00:00:00').getTime();
    let dayMs = 24 * 60 * 60 * 1000;
    for (var i = 0; i < numItems; i++) {
        data.push({
            time: new Date(baseTime + i * dayMs),
            value: Math.round(20 + 80 * Math.random())
        });
    }
    return data;
}

export default App;
