import React from 'react';
import styles from './Card.module.css';

function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>test</h2>
                <p className={styles.notification}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sequi provident dolore distinctio fugiat accusamus, minus aliquam totam qui iusto exercitationem aut vel natus, culpa sit corrupti saepe aspernatur doloribus?
                </p>
                <div className={styles.buttonWrap}>
                    <a href="#" className={`btn btn-primary ${styles.button}`}>More info</a>
                </div>
            </div>
        </div>
    );
}

export default Card;