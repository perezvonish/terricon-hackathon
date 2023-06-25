import React from 'react';
import Image from "next/image";
import Pull from "../../../public/GeneralWork.png"
import Worker from "../../../public/workerBed.png"
import Pillows from "../../../public/CleaningRoom.png"

const Gallery = () => {
    return (
        <div className="flex flex-col mx-auto my-6 scale-75">
            <p className="text-left text-[40px]">ГАЛЕРЕЯ</p>
            <div className="flex my-6">
                <div>
                    <Image className="rounded-[2rem] mx-4" src={Pull} alt="worker" />
                </div>
                <div>
                    <Image className="rounded-[2rem]" src={Worker} alt="worker" />
                </div>
                <div>
                    <Image className="rounded-[2rem] mx-4" src={Pillows} alt="worker" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;