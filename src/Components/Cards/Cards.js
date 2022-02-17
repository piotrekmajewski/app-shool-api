import React, { Component } from 'react';
import Card from './Card/Card';
import styles from './Cards.module.css';

class Cards extends Component {
    render() {
        return (
            <div className={styles.Cards}>
                {this.props.cards.map(card => <Card key={card.id}{...card} />)}
            </div>
        );
    }
}

export default Cards;