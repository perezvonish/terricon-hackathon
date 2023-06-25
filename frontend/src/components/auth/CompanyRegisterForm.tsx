import React, {useState} from 'react';
import Image from "next/image";
import ArrowImage from "../../../public/arrow.svg";
import styles from "@/styles/auth.module.css";
import {AuthRegister, authRegisterRequest, UserRegisterRoles} from "@/api/auth/auth.api";
import Router from "next/router";
import Link from "next/link";

const CompanyRegisterForm = () => {
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const onSubmit = async () => {
        const data: AuthRegister = {
            phoneNumber: phone,
            name,
            surname: " ",
            password,
            repeatPassword,
            role: UserRegisterRoles.COMPANY
        }

        try {
            const res = await authRegisterRequest(data)

            if (res.status == 201){
                // eslint-disable-next-line react-hooks/rules-of-hooks
                await Router.push('/');
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    const handlePhoneChange = (event: any) => {
        return setPhone(event.target.value);
    };

    const handleNameChange = (event: any) => {
        return setName(event.target.value);
    };

    const handlePasswordChange = (event: any) => {
        return setPassword(event.target.value);
    };

    const handleRepeatPasswordChange = (event: any) => {
        return setRepeatPassword(event.target.value);
    };

    return (
        <div>
            <form>
                <label className="flex flex-col items-center">
                    <div className="mr-2 self-start">
                        <Link href="/">
                            <Image priority src={ArrowImage} alt="Back" width={24} height={24} />
                        </Link>
                    </div>
                    <span className="text-black text-[40px] font-normal">РЕГИСТРАЦИЯ</span>

                    <div className="flex flex-col mt-6">
                        <div className="flex flex-row justify-around items-center">
                            <button id="customer" type="button" className={`rounded-[30px] text-lg font-bold p-4 bg-blue-300`}>
                                Я - компания
                            </button>
                        </div>
                        <input
                            type="text"
                            className="h-[4rem] bg-zinc-100 rounded-[30px] text-lg mt-4 font-bold pl-4"
                            placeholder="Телефон"
                            onInput={handlePhoneChange}
                        />
                        <input
                            type="text"
                            className="h-[4rem] bg-zinc-100 rounded-[30px] text-lg font-bold pl-4 mt-4"
                            placeholder="Название компании"
                            onInput={handleNameChange}
                        />
                        <input
                            type="text"
                            className="h-[4rem] bg-zinc-100 rounded-[30px] text-lg font-bold pl-4 mt-4"
                            placeholder="Пароль"
                            onInput={handlePasswordChange}
                        />
                        <input
                            type="text"
                            className="h-[4rem] bg-zinc-100 rounded-[30px] text-lg font-bold pl-4 mt-4"
                            placeholder="Повторите пароль"
                            onInput={handleRepeatPasswordChange}
                        />

                        <div className={styles.checkboxContainer}>
                            <input type="checkbox" id="flag" name="flag" required className={styles.checkboxInput}/>
                            <label htmlFor="flag" className={styles.checkboxCheckmark}></label>
                            <label className="ml-2" htmlFor="flag">Я прочел условия и даю согласие на обработку персональных данных</label>
                        </div>

                        <button type="button" onClick={onSubmit} className="rounded-[30px] text-lg font-bold p-4 mt-4 bg-blue-200">Зарегистрироваться</button>
                    </div>
                </label>
            </form>
        </div>
    );
};

export default CompanyRegisterForm;