import React from 'react';
import styles from './Card.module.css';

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>{props.title}</h2>
                <p className={styles.notification}>{props.notification}
                </p>
                <div className={styles.buttonWrap}>
                    <a href="#" className={`btn btn-primary ${styles.button}`}>More info</a>
                </div>
            </div>
        </div>
    );
}

export default Card;