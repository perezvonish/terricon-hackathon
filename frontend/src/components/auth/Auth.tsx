import React, {useState} from 'react';
import styles from "@/styles/auth.module.css"
import general from "@/styles/general.module.css"
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";

const Auth = () => {
    const [activeTab, setActiveTab] = useState('login');

    const handleTabChange = (tab: any) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex flex-col items-center m-auto">
            <div className={`${general.shadowBox}`}>
                <div className="p-10">
                    {activeTab === 'login' && <LoginForm onTabChange={handleTabChange} />}
                    {activeTab === 'register' && <RegisterForm onTabChange={handleTabChange} />}
                </div>
            </div>
        </div>
    );
};

export default Auth;