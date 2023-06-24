import React from 'react';
import general from "@/styles/general.module.css";
import Image from "next/image";
import Workers from "../../../public/Workers.png";
import WorkerExample from "../../../public/workerExample.png";
import Link from "next/link";

const Welcome = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col">
                <div className="text-6xl font-bold">
                    Здесь профессионалы,
                </div>
                <div className="text-6xl font-bold">
                    которых вы ищите
                </div>
            </div>
            <div className="mt-6 w-[34rem] font-medium text-black">
                <div>
                    Зачем тратить время на поиски людей на бесчисленных платформах, собеседовать и понимать, что они вам не подходят? Мы уже сделали всё за вас - отобрали лучших кандидатов для вашего бизнеса
                </div>
            </div>
            <div className="grid grid-cols-5 gap-4 m-8">
                <div className={general.gridBoxLemon}>
                    <span className="font-bold">Наша миссия -</span> находить и предлагать лучших кандидатов для долгосрочного и качественного сотрудничества
                </div>
                <div className={`flex flex-col mt-auto ${general.gridBoxBlue}`}>
                    <p>более</p>
                    <p className="text-4xl font-bold">100</p>
                    <p className="mt-4">компаний</p>
                    <p>нашли своих </p>
                    <p>сотрудников</p>
                    <p>благодаря нам</p>
                </div>
                <div className="flex flex-col justify-between">
                    <Link href="/employee/find" className={general.lemonButton}>
                        Подобрать сотрудника
                    </Link>
                    <Image src={Workers} alt="asd" style={{borderRadius: "2rem", marginRight: "auto", marginLeft: "auto", width: "75%"}}/>
                </div>
                <div className={`flex flex-col mt-auto ${general.gridBoxBlue}`}>
                    <p>более</p>
                    <p className="text-4xl font-bold">1000</p>
                    <p className="mt-4">компаний</p>
                    <p>проверенных</p>
                    <p>кандидатов для</p>
                    <p>вашего бизнеса нам</p>
                </div>
                <div className="mt-auto ${general.gridBoxLemon}">
                    <Image src={WorkerExample} alt="workerExample" style={{borderRadius: "2rem"}} priority={false} />
                </div>
            </div>
        </div>
    );
};

export default Welcome;