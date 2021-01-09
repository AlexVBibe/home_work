'use strict';
/*  eslint-disable no-unused-vars */
/*  eslint-disable no-undef */


import React, { /*useEffect,*/ useState } from "react";

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={() => this.buttonHandler()}>
                {this.props.Content}
            </button>
        );
    }

    buttonHandler() {
        this.props.onClick();
    }
}


export default LikeButton;
