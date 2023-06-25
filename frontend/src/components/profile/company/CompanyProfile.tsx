import React from 'react';
import Avatar from "@/components/profile/Avatar";
import Description from "@/components/profile/Description";
import CompanyInfo from "@/components/profile/company/CompanyInfo";
import ApartX from "../../../../public/ApartX.png"
import CompanyButtons from "@/components/profile/company/CompanyButtons";

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
                    <CompanyButtons />
                    <CompanyInfo />
                </div>
            </div>
        </div>
    );
};

export default CompanyProfile;