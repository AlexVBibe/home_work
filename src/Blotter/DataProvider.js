'use strict';

let jsonData = require('./staticData.json');

class DataProvider {
    loadData() {
        return jsonData.data;
    }

    getChartData() {
        let data = [];

        data.push({
            title: 'Visits',
            data: this.getRandomDateArray(150)
        });

        data.push({
            title: 'Categories',
            data: this.getRandomArray(20)
        });

        data.push({
            title: 'Categories',
            data: this.getRandomArray(10)
        });

        data.push({
            title: 'Data 4',
            data: this.getRandomArray(6)
        });

        return data;
    }

    // Data generation
    getRandomArray(numItems) {
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

    getRandomDateArray(numItems) {
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
}

export const providerFactory = {
    getProvider: () => new DataProvider()
}
