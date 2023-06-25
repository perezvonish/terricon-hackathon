import React from 'react';
import LayoutWhite from "@/components/LayoutWhite";
import clientStyles from "@/styles/client-profile.module.scss";
import general from "@/styles/general.module.scss";
import Image from "next/image";
import Worker from "../../../public/Workers.png"
import FullStar from "../../../public/fullStar.svg"

const Page = () => {
    return (
        <LayoutWhite>
            <div className="my-12 mx-36">
                <div className="text-[2rem]">Результат поиска</div>
                <div className="flex justify-between w-full mt-6">
                    <input type="text" className={`${clientStyles.inputBubble} w-full mr-6`} />
                    <button className={general.blueButton}>Найти</button>
                </div>
                <div className="flex flex-col my-16">
                    <div className="flex">
                        <div>
                            <Image src={Worker} alt="worker" className="w-48 h-48 mx-auto object-cover rounded-full" />
                        </div>
                        <div className="flex flex-col mx-10 items-center">
                            <p className="m-4">Алена</p>
                            <div className="flex m-4">
                                <Image src={FullStar} alt="fullStar" />
                                <Image src={FullStar} alt="fullStar" />
                                <Image src={FullStar} alt="fullStar" />
                                <Image src={FullStar} alt="fullStar" />
                                <Image src={FullStar} alt="fullStar" />
                            </div>
                            <button className={`${general.emptyButton} self-center m-4`}>Выбрать</button>
                        </div>
                        <div className="m-4">
                            <p className={`${clientStyles.inputBubble} w-[42rem]  mr-6`}>
                                Добросовестно и своевременно выполняю свои обязанности: уборку квартир, частных домов и номеров. Отлично владею как традиционными, так и машинными методами чистки полов, ковровых покрытий, мебели от загрязнений и пыли. Быстро и качественно наведу порядок и придам любому помещению аккуратный и презентабельный вид.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWhite>
    );
};

export default Page;