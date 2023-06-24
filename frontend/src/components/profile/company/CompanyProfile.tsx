import React from 'react';
import Avatar from "@/components/profile/Avatar";
import Description from "@/components/profile/Description";
import CompanyInfo from "@/components/profile/company/CompanyInfo";
import ApartX from "../../../../public/ApartX.png"

const CompanyProfile = () => {
    return (
        <div className="mx-auto my-10">
            <p className="text-2xl">
                ПРОФИЛЬ
            </p>
            <div className={`flex flex-row`}>
                <div className="mr-6 flex flex-col">
                    <Avatar image={ApartX}/>
                    <Description />
                </div>
                <div className="mt-6">
                    <div>
                        Buttons
                    </div>
                    <CompanyInfo />
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;