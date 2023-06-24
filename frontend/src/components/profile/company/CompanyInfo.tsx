import React from 'react';
import general from "@/styles/general.module.scss";
import styles from "@/styles/client-profile.module.scss";
import Link from "next/link";

const CompanyInfo = () => {
    return (
        <div className={general.shadowBox}>
            <div className={`${styles.clientInfo} grid grid-cols-2 gap-4`}>
                <div>
                    <p className="font-bold">E-mail</p>
                    <input className={styles.inputBubble} type="text" placeholder="info@apartx.co" disabled />
                </div>

                <div>
                    <p className="font-bold">Юридическое название</p>
                    <input className={styles.inputBubble} type="text" placeholder="ApartX" disabled />
                </div>

                <div>
                    <p className="font-bold">Телефон компании</p>
                    <input className={styles.inputBubble} type="text" placeholder="+7 (747) 379 05 90" disabled />
                </div>

                <div>
                    <p className="font-bold">Страна регистрации</p>
                    <input className={styles.inputBubble} type="text" placeholder="Казахстан" disabled />
                </div>

                <div>
                    <p className="font-bold">Контактное лицо (ФИО)</p>
                    <input className={styles.inputBubble} type="text" placeholder="Не указано" disabled />
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

export default CompanyInfo;