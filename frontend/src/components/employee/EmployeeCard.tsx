import React from 'react';
import Image from "next/image";

const EmployeeCard = ({image, description}: {image: any, description: string}) => {
    return (
        <div className="flex flex-col mt-6 mr-6">
            <Image src={image} alt={description} className="w-[22rem] rounded-3xl" />
            <p className="text-xl">{description}</p>
        </div>
    );
};

export default EmployeeCard;