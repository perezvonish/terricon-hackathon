import React, {useEffect} from 'react';
import {useJwt} from "react-jwt";
import {parseCookies} from "nookies";
import {useRouter} from "next/router";
import ClientProfile from "@/components/profile/client/ClientProfile";
import EmployeeProfile from "@/components/profile/employee/EmployeeProfile";
import CompanyProfile from "@/components/profile/company/CompanyProfile";
import LayoutGradient from "@/components/LayoutGradient";

const cookies = parseCookies()

// @ts-ignore
const Index = () => {
    const router = useRouter();

    useEffect(() => {
        if (!cookies.token) {
            router.push('/');
        }
    }, [router]);

    const { decodedToken, isExpired } = useJwt(cookies.token);

    let profileComponent = null;

    if (decodedToken && decodedToken.role === "CLIENT") {
        profileComponent = <ClientProfile />;
    } else if (decodedToken && decodedToken.role === "EMPLOYER") {
        profileComponent = <EmployeeProfile />;
    } else if (decodedToken && decodedToken.role === "COMPANY") {
        profileComponent = <CompanyProfile />;
    }

    return (
        <LayoutGradient>
            {profileComponent}
        </LayoutGradient>
    );
};

export default Index;