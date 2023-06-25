import React from 'react';
import Link from 'next/link'
import styles from "@/styles/navigation.module.css"
import general from "@/styles/general.module.css"
import {destroyCookie, parseCookies} from "nookies";
import {useJwt} from "react-jwt";
import {useRouter} from "next/router";

const cookies = parseCookies()


const RightNav = () => {
    const { decodedToken, isExpired } = useJwt(cookies.token);
    const router = useRouter();

    const handleLogout = () => {
        destroyCookie(null, 'token')
        router.reload();
        router.push("/")

    };

    const company = <Link href="/company" className={styles.navigationLink}><button className={general.blueButton}>Я - компания</button></Link>
    const login = <Link href="/auth" className={`${styles.navigationLink}`}>Войти</Link>
    // @ts-ignore
    const profile = decodedToken && decodedToken.id ? <Link href={`/profile/${decodedToken.id}`} className={`${styles.navigationLink} mr-2`}>Профиль</Link> : <div></div>
    const logout = <button onClick={handleLogout}>Выйти</button>

    return (
        <div className={styles.navigationRight}>
            {decodedToken ? (
                <div>
                    {profile}
                    {logout}
                </div>
            ) : (
                <div>
                    {company}
                    {login}
                </div>
            )}
        </div>
    );
};

export default RightNav;