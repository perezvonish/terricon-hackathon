import React, {useEffect} from 'react';
import {useJwt} from "react-jwt";
import {parseCookies} from "nookies";
import Router, {useRouter} from "next/router";
import ClientProfile from "@/components/profile/client/ClientProfile";
import EmployeeProfile from "@/components/profile/employee/EmployeeProfile";
import CompanyProfile from "@/components/profile/company/CompanyProfile";
import LayoutGradient from "@/components/LayoutGradient";
import {UserGetByIDResponse, userGetByIdRequest} from "@/api/profile.api";
import {GetServerSideProps} from "next";

const cookies = parseCookies()

export const getServerSideProps: GetServerSideProps  = async (context) => {
    const { userId } = context.params;

    const res = await userGetByIdRequest(userId)

    return {
        props: {
            data: res.data,
            userId
        }
    }
}

const Index = ({data, userId}: {data: UserGetByIDResponse, userId: number}) => {
    const router = useRouter();

    const { decodedToken, isExpired } = useJwt(cookies.token);

    let profileComponent = null;

    if (decodedToken && decodedToken.role === "CLIENT") {
        profileComponent = <ClientProfile data={data} />;
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