import React, { /*useEffect,*/ useState } from "react";
import LikeButton from './like_button.js';
import Blotter from './Blotter.js';
import BarChart from './BarChart.js';

import './app.css';

function App() {
    const [data, setData] = useState(getChartData());
    const [rowData, setRowData] = useState([
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
    ]);

    return (
        <div className='background'>
            <div className='applicationCaption'>
                <span>Homework of a course "building-development-environmen"</span>
            </div>

            <div class='backgroundDark' style={{ height: 57 }}>
                <LikeButton />
                <LikeButton />
                <LikeButton />
            </div>

            <Blotter ItemsSource = {rowData} />

            <div style={{ height: 400 }}>
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
