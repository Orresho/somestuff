import React, { Component } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import '../../Styles/base.css';

class Basepage extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="Basepage">
                <Header>This is the header</Header>
                {children}
                <Footer>This is the footer</Footer>
            </div>
        );
    }
}

export default Basepage;