import React from 'react';
import Logo from "@/components/navigation/Logo";
import RightNav from "@/components/navigation/RightNav";
import styles from "@/styles/navigation.module.css"

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className="flex flex-row justify-between items-center mx-10 py-2">
                <Logo />
                <RightNav />
            </div>
        </div>

    );
};

export default Navigation;