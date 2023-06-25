import React from 'react';
import styles from "@/styles/navigation.module.css"
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png"

const Logo = () => {
    return (
        <div>
            <Link href="/">
                <Image src={logo} alt="logo" />
            </Link>
        </div>
    );
};

export default Logo;