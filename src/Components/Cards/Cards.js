import React, { Component } from 'react';
import Card from './Card/Card';
import styles from './Cards.module.css';

class Cards extends Component {
    render() {
        return (
            <div className={styles.Cards}>
                <Card />
                <Card />
                <Card />
            </div>
        );
    }
}

export default Cards;