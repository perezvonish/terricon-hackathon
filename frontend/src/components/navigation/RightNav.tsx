import React from 'react';
import Link from 'next/link'
import styles from "@/styles/navigation.module.css"
import general from "@/styles/general.module.css"

const RightNav = () => {
    return (
        <div className={styles.navigationRight}>
            <div>
                <Link href="/company" className={styles.navigationLink}>
                    <button className={general.blueButton}>Я - компания</button>
                </Link>
                <Link href="/auth" className={styles.navigationLink}>
                    <button>Войти</button>
                </Link>
            </div>
        </div>
    );
};

export default RightNav;