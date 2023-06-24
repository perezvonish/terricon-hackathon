import React from 'react';
import Image from "next/image";
import general from "@/styles/general.module.scss";

const Avatar = ({image}: {image: any}) => {
    return (
        <div className={`p-10 mt-4 ${general.shadowBox}`}>
            <Image src={image} alt="test" className="w-48 h-48 mx-auto object-cover rounded-full" />
        </div>
    );
};

export default Avatar;