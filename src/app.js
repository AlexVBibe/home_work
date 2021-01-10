import regeneratorRuntime from "regenerator-runtime";
import React, { /*useEffect,*/ useState } from "react";
import { Confirm } from 'react-st-modal';
import LikeButton from './like_button.js';
import Blotter from './Blotter.js';
import BarChart from './BarChart.js';
import { ChuckNorris } from './ChuckNorris/ChuckNorris.js';
import { showCustomDialog } from './CustomDialog/CustomDialog.js';
import { providerFactory } from "./Blotter/DataProvider.js";

import './app.css';

function App() {
    const [data, setData] = useState(providerFactory.getProvider().getChartData());
    const [rowData, setRowData] = useState(providerFactory.getProvider().loadData());

    const showConfirmationPopup = async (event) => {
        console.info("showConfirmationPopup Clicked");
        const isConfirm = await Confirm(
            'I copied a code to show default confirm dialog and to make it work i had to add regeneratorRuntime because of it uses async?',
            'Default confirm dialog'
        );

        if (isConfirm) {
            console.info("Confirmed");
        }
    }

    const showCustomDialogPopup = async (event) => {
        console.info("showCustomDialogPopup Clicked");
        const result = await showCustomDialog();
        console.info("showPopupHandler1 " + result);
    }

    return (
        <div className='background'>
            <div className='applicationCaption'>
                <span>Homework of a course "building-development-environmen"</span>
            </div>

            <div class='backgroundDark' style={{ height: 57 }}>
                <LikeButton Content="Star match" onClick={showConfirmationPopup} />
                <LikeButton Content="Sea battle" onClick={showCustomDialogPopup} />
                <LikeButton Content="Cross game" />
                <LikeButton Content="Chuck Norris" />
            </div>

            <Blotter ItemsSource={rowData} />
            <ChuckNorris />

            <div style={{ height: 350, width: 800 }}>
                <BarChart
                    data={data[1].data}
                    title={data[1].title}
                    color="yellow"
                />
            </div>

        </div>
    );
}


export default App;
