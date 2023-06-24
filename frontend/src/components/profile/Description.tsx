import React from 'react';
import general from "@/styles/general.module.scss";

const Description = () => {
    return (
        <div className={`p-10 mt-4 flex-grow ${general.shadowBox}`}>
            <p>Обо мне</p>
            <div className="min-w-[16rem] max-w-[16rem] whitespace-normal">

            </div>
        </div>
    );
};

export default Description;