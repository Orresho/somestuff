import React, { Component } from 'react';
import Header from '../../Components/Header';

import '../../Styles/base.css';

class Basepage extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="page-wrapper">
                <Header>This is the header</Header>
                {children}
                <h3>This is the footer</h3>
            </div>
        );
    }
}

export default Basepage;