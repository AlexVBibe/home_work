'use strict';
/*  eslint-disable no-unused-vars */
/*  eslint-disable no-undef */


import React, { /*useEffect,*/ useState } from "react";

class LikeButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            liked: false,
            defaultActionHandler: () => setState(state => ({
                liked: true,
                defaultActionHandler: defaultActionHandler
            }))
        };
    }

    render() {
        if (this.state.liked) {
            return 'You liked this..';
        }

        return (
            <button onClick={() => this.setState({ liked: true })}>
                {this.props.Content}
            </button>
        );
    }
}


export default LikeButton;
