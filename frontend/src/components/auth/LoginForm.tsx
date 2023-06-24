import React from 'react';
import general from "@/styles/general.module.css"
import {Props} from "next/script";

const LoginForm = ({ onTabChange }: {onTabChange: any}) => {
    const handleSwitchToRegister = () => {
        // @ts-ignore
        onTabChange('register');
    };

    return (
        <form>
            <label className="flex flex-col items-center">
                <span className="text-black text-[40px] font-normal">Вход</span>
                <div className="flex flex-col mt-6">
                    <input
                        type="text"
                        className="h-[4rem] bg-zinc-100 rounded-[30px] text-lg font-bold pl-4"
                        placeholder="Логин"
                    />
                    <input
                        type="text"
                        className="h-[4rem] bg-zinc-100 rounded-[30px] text-lg font-bold pl-4 mt-4"
                        placeholder="Пароль"
                    />
                    <a href="" className="mt-4 text-black text-[20px] font-medium text-center">Забыли пароль?</a>
                    <button type="submit" className="rounded-[30px] text-lg font-bold p-4 mt-4 bg-blue-200">Войти</button>

                    <p className="mt-16 text-center text-black text-[20px] font-medium leading-7">У вас еще нет аккаунта?</p>
                    <p className="text-center text-black text-[20px] font-medium leading-7">
                        Регистрация займет меньше минуты
                    </p>
                    <button className="rounded-[30px] text-lg font-bold p-4 mt-4 bg-blue-200" onClick={handleSwitchToRegister}>Зарегистрироваться</button>
                </div>
            </label>
        </form>
    );
};

export default LoginForm;