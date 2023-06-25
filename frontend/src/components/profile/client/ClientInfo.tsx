import React from 'react';
import styles from "@/styles/client-profile.module.scss"
import general from "@/styles/general.module.scss";
import Link from "next/link";
import {UserGetByIDResponse} from "@/api/profile.api";

const ClientInfo = ({data}: {data: UserGetByIDResponse}) => {
    const makePhoneNumber = (phoneNumber: string) => {
        let arr = phoneNumber.split("")
        return `+${arr[0]} (${arr[1]}${arr[2]}${arr[3]}) ${arr[4]}${arr[5]}${arr[6]} ${arr[7]}${arr[8]} ${arr[9]}`
    }

    return (
        <div className={general.shadowBox}>
            <div className={`${styles.clientInfo} grid grid-cols-2 gap-4`}>
                <div>
                    <p className="font-bold">E-mail</p>
                    <input className={styles.inputBubble} type="text" placeholder={data.email ? data.email : "Пусто"} />
                </div>

                <div>
                    <p className="font-bold">Имя</p>
                    <input className={styles.inputBubble} type="text" placeholder={data.name ? data.name : "Пусто"} />
                </div>

                <div>
                    <p className="font-bold">Телефон для связи</p>
                    <input className={styles.inputBubble} type="text" placeholder={data.phoneNumber ? makePhoneNumber(data.phoneNumber) : "Пусто"} />
                </div>

                <div>
                    <p className="font-bold">Страна</p>
                    <input className={styles.inputBubble} type="text" placeholder={data.country} />
                </div>

                <div>
                    <p className="font-bold">Дата рождения <span className="font-light">(необязательно)</span></p>
                    <input className={styles.inputBubble} type="text" placeholder={data.birthday ? (data.birthday).toString() : "Пусто"} />
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

export default ClientInfo;