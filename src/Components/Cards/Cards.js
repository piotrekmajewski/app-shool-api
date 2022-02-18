import React from 'react';
import Card from './Card/Card';
import styles from './Cards.module.css';

const Cards = () => {
    fetch('http://universities.hipolabs.com/search?country=Poland')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
    return (
        <div className={styles.Cards}>
            {/* {this.props.cards.map(card => <Card key={card.id}{...card} />)} */}
        </div>
    );
}

export default Cards;