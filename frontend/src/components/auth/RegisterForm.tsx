import React, {useState} from 'react';
import styles from "@/styles/auth.module.css"
import Image from 'next/image';
import ArrowImage from "../../../public/arrow.svg"

const RegisterForm = ({ onTabChange }: {onTabChange: any}) => {
    const [userType, setUserType] = useState('customer');
    const [phone, setPhone] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const changeUserType = (type: string) => {
        return setUserType(type);
    };

    const handlePhoneChange = (event: any) => {
        return setPhone(event.target.value);
    };

    const handleNicknameChange = (event: any) => {
        return setNickname(event.target.value);
    };

    const handlePasswordChange = (event: any) => {
        return setPassword(event.target.value);
    };

    const handleRepeatPasswordChange = (event: any) => {
        return setRepeatPassword(event.target.value);
    };

    const handleSwitchToRegister = () => {
        // @ts-ignore
        onTabChange('login');
    };

    return (
        <form>
            <label className="flex flex-col items-center">
                <div className="mr-2">
                    <button onClick={handleSwitchToRegister}>
                        <Image priority src={ArrowImage} alt="Back" width={24} height={24} />
                    </button>
                </div>
                <span className="text-black text-[40px] font-normal">РЕГИСТРАЦИЯ</span>

                <div className="flex flex-col mt-6 w-96">
                    <div className="flex flex-row justify-around items-center">
                        <button id="customer" type="button" className={`bg-zinc-100 rounded-[30px] text-lg p-4 ${userType === 'customer' ? 'bg-blue-300' : 'bg-blue-200'}`} onClick={() => changeUserType('customer')}>
                            Я заказчик
                        </button>
                        <button id="executor" type="button" className={`bg-zinc-100 rounded-[30px] text-lg p-4 ${userType === 'executor' ? 'bg-blue-300' : 'bg-blue-200'}`} onClick={() => changeUserType('executor')}>
                            Я исполнитель
                        </button>
                    </div>
                    <input
                        type="text"
                        value={phone}
                        className="h-[4rem] bg-zinc-100 rounded-[30px] text-lg mt-4 font-bold pl-4"
                        placeholder="Телефон"
                        onInput={handlePhoneChange}
                    />
                    <input
                        type="text"
                        value={nickname}
                        className="h-[4rem] bg-zinc-100 rounded-[30px] text-lg font-bold pl-4 mt-4"
                        placeholder="Никнейм"
                        onInput={handleNicknameChange}
                    />
                    <input
                        type="text"
                        value={password}
                        className="h-[4rem] bg-zinc-100 rounded-[30px] text-lg font-bold pl-4 mt-4"
                        placeholder="Пароль"
                        onInput={handlePasswordChange}
                    />
                    <input
                        type="text"
                        value={repeatPassword}
                        className="h-[4rem] bg-zinc-100 rounded-[30px] text-lg font-bold pl-4 mt-4"
                        placeholder="Повторите пароль"
                        onInput={handleRepeatPasswordChange}
                    />

                    <div className={styles.checkboxContainer}>
                        <input type="checkbox" id="flag" name="flag" required className={styles.checkboxInput}/>
                        <label htmlFor="flag" className={styles.checkboxCheckmark}></label>
                        <label htmlFor="flag" className="w-96">Я прочел условия и даю согласие на обработку персональных данных</label>
                    </div>

                    <button type="submit" className="bg-zinc-100 rounded-[30px] text-lg font-bold p-4 mt-4 bg-blue-200">Зарегистрироваться</button>
                </div>
            </label>
        </form>
    );
};

export default RegisterForm;