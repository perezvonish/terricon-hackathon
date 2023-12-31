import React from 'react';
import general from "@/styles/general.module.scss";
import styles from "@/styles/client-profile.module.scss";
import Link from "next/link";

const EmployeeInfo = () => {
    return (
        <div className={general.shadowBox}>
            <div className={`${styles.clientInfo} grid grid-cols-2 gap-4`}>
                <div>
                    <p className="font-bold">E-mail</p>
                    <input className={styles.inputBubble} type="text" placeholder="elena76@gmail.com" disabled />
                </div>

                <div>
                    <p className="font-bold">Имя</p>
                    <input className={styles.inputBubble} type="text" placeholder="Елена" disabled />
                </div>

                <div>
                    <p className="font-bold">Телефон для связи</p>
                    <input className={styles.inputBubble} type="text" placeholder="+7 (707) 450 29 81" disabled />
                </div>

                <div>
                    <p className="font-bold">Страна</p>
                    <input className={styles.inputBubble} type="text" placeholder="Казахстан" disabled />
                </div>

                <div>
                    <p className="font-bold">Дата рождения <span className="font-light">(необязательно)</span></p>
                    <input className={styles.inputBubble} type="text" placeholder="12.09.1976" disabled />
                </div>
            </div>

            <div className={`my-16 ${styles.clientInfo}`}>
                <p className="font-bold">Сменить пароль</p>
                <div className="grid grid-cols-2 gap-4 my-4">
                    <input className={styles.inputBubble} type="password" placeholder="Старый пароль" />
                    <input className={styles.inputBubble} type="password" placeholder="Новый пароль" />
                </div>
                <Link className="font-bold" href="/">Забыли пароль?</Link>
            </div>
        </div>
    );
};

export default EmployeeInfo;