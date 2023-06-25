import React from 'react';
import TopCard from "@/components/general/TopCard";
import Image from "next/image";
import WorkerBed from "../../../public/workerBed.png"
import {GetServerSideProps} from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {

}

const TopFive = () => {

    return (
        <div className="flex flex-row mx-auto my-14">
            <div className="relative">
                <Image src={WorkerBed} alt="workerBed" className="w-64 rounded-3xl relative" />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-600 rounded-3xl to-transparent"></div>
                <div className="absolute top-0 left-0 p-6 px-10">
                    <div className="text-white font-bold text-left text-xl">
                        Топ-3 лучших горничных
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-max ml-6">
                <div className="flex">
                    <TopCard id={1} name="Алёна" rating={5} reviews={1}/>
                    <TopCard id={1} name="Елена" rating={5} reviews={2}/>
                    <TopCard id={1} name="Юн" rating={5} reviews={12}/>
                </div>
                <div className="w-80 text-black font-bold text-right self-end mt-4">
                    Наши лучшие кандидаты имеют подтверждённые документы, высокую квалификацию и большой опыт работы
                </div>
            </div>
        </div>
    );
};

export default TopFive;