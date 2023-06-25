import React from 'react';
import LeftFooter from "@/components/footer/LeftFooter";
import CenterFooter from "@/components/footer/CenterFooter";
import RightFooter from "@/components/footer/RightFooter";
import styles from "@/styles/footer.module.css"

const Footer = () => {
    return (
        <div className={`${styles.footer} drop-shadow-2xl`}>
            <LeftFooter />
            <CenterFooter />
            <RightFooter />
        </div>
    );
};

export default Footer;