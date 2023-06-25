import React from 'react';
import Avatar from "@/components/profile/Avatar";
import Description from "@/components/profile/Description";
import EmployeeInfo from "@/components/profile/employee/EmployeeInfo";
import EmployeeImage from "../../../../public/workerExample.png"
import EmployeeButtons from "@/components/profile/employee/EmployeeButtons";

const EmployeeProfile = () => {
    return (
        <div className="mx-auto my-10">
            <p className="text-2xl">
                ПРОФИЛЬ
            </p>
            <div className={`flex flex-row`}>
                <div className="mr-6 flex flex-col">
                    <Avatar image={EmployeeImage}/>
                    <Description />
                </div>
                <div className="mt-4">
                    <EmployeeButtons />
                    <EmployeeInfo />
                </div>
            </div>
        </div>
    );
};

export default EmployeeProfile;