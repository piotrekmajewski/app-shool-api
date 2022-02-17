import React, { Component } from 'react';
import ExpandedCard from './Components/ExpandedCard/ExpandedCard';
import Testimonials from './Components/Testimonials/Testimonials';
import Cards from './Components/Cards/Cards';

import './App.css';
class App extends Component {
    render() {
        return (
            <div className="App">
                <ExpandedCard />
                <Testimonials />
                <Cards />
            </div>
        );
    }
}

export default App;