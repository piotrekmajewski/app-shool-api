import React from 'react';
import styles from './ExpandedCard.module.css';

function ExpandedCard() {
    return (
        <div className={styles.expandedCardWrap}>
            <div className={styles.card}></div>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>School Card</h2>
                    <p className={styles.notification}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sequi provident dolore distinctio fugiat accusamus, minus aliquam totam qui iusto exercitationem aut vel natus, culpa sit corrupti saepe aspernatur doloribus?
                    </p>
                    <div className={styles.buttonWrap}>
                        <a href="#" className={`btn btn-primary ${styles.button}`}>More info</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpandedCard;