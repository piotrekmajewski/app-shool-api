import React, { Component } from 'react';
import ExpandedCard from './Components/ExpandedCard/ExpandedCard';
import Testimonials from './Components/Testimonials/Testimonials';
import Cards from './Components/Cards/Cards';

import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                {
                    id: 1,
                    title: 'Card One',
                    notification: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ducimus possimus ipsam dignissimos nesciunt hic nemo repellendus cupiditate sapiente, porro quidem id adipisci reprehenderit accusantium illo iure praesentium natus dolor?'
                },
                {
                    id: 2,
                    title: 'Card Two',
                    notification: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ducimus possimus ipsam dignissimos nesciunt hic nemo repellendus cupiditate sapiente, porro quidem id adipisci reprehenderit accusantium illo iure praesentium natus dolor?'
                },
                {
                    id: 3,
                    title: 'Card Three',
                    notification: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut ducimus possimus ipsam dignissimos nesciunt hic nemo repellendus cupiditate sapiente, porro quidem id adipisci reprehenderit accusantium illo iure praesentium natus dolor?'
                },
            ]
        };
    }
    render() {
        return (
            <div className="App">
                <ExpandedCard />
                <Testimonials />
                <Cards cards={this.state.cards} />
            </div>
        );
    }
}

export default App;