import React, {useState} from 'react';
import {AuthLogin, authLoginRequest} from "@/api/auth.api";
import {setCookie} from "nookies";
import Router from "next/router";


const LoginForm = ({ onTabChange }: {onTabChange: any}) => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")

    const handlePhoneNumber = (event: any) => {
        return setPhoneNumber(event.target.value)
    }

    const handlePassword = (event: any) => {
        return setPassword(event.target.value)
    }

    const handleSwitchToRegister = () => {
        // @ts-ignore
        onTabChange('register');
    };

    const onSubmit = async () => {
        const data: AuthLogin = {
            phoneNumber,
            password
        }

        try {
            const res = await authLoginRequest(data)

            if (res.status == 201){
                setCookie(null, "token", res.data.token)

                // eslint-disable-next-line react-hooks/rules-of-hooks
                await Router.push('/');
                Router.reload();
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <form>
            <label className="flex flex-col items-center">
                <span className="text-black text-[40px] font-normal">Вход</span>
                <div className="flex flex-col mt-6">
                    <input
                        type="text"
                        className="h-[4rem] bg-zinc-100 rounded-[30px] text-lg font-bold pl-4"
                        placeholder="Номер телефона"
                        onInput={handlePhoneNumber}
                    />
                    <input
                        type="text"
                        className="h-[4rem] bg-zinc-100 rounded-[30px] text-lg font-bold pl-4 mt-4"
                        placeholder="Пароль"
                        onInput={handlePassword}
                    />
                    <a href="" className="mt-4 text-black text-[20px] font-medium text-center">Забыли пароль?</a>
                    <button type="button" onClick={onSubmit} className="rounded-[30px] text-lg font-bold p-4 mt-4 bg-blue-200">Войти</button>

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