'use strict';

let jsonData = require('./staticData.json');

class DataProvider {
    loadData() {
        // // let data = [
        // //     { make: "Toyota", model: "Celica", price: 35000 },
        // //     { make: "Ford", model: "Mondeo", price: 32000 },
        // //     { make: "Porsche", model: "Boxter", price: 72000 },
        // //     { make: "Porsche", model: "Boxter", price: 72000 }
        // // ];

        return jsonData.data;
    }
}
export const providerFactory = {
    getProvider : () => new DataProvider()
}
