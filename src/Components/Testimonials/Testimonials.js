import React from 'react';
import styles from './Testimonials.module.css';

function Testimonials() {
    return (
        <div className={styles.testimonials}>
            <div className={styles.content}>
                <p className={styles.notification}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque numquam quisquam molestiae dolore.
                </p>
            </div>
        </div>
    );
}

export default Testimonials;