import React, { Component } from "react";

class Basepage extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="page-wrapper">
                <h1>This is the header</h1>
                {children}
                <h3>This is the footer</h3>
            </div>
        );
    }
}

export default Basepage;