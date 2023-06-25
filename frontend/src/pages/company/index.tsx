import React from 'react';
import LayoutGradient from "@/components/LayoutGradient";
import general from "@/styles/general.module.scss"
import CompanyRegisterForm from "@/components/auth/CompanyRegisterForm";

const Index = () => {
    return (
        <>
        <LayoutGradient>
            <div className="flex flex-col items-center m-auto">
                <div className={general.shadowBox}>
                    <CompanyRegisterForm />
                </div>
            </div>
        </LayoutGradient>
        </>
    );
};

export default Index;


// <CompanyProfile />