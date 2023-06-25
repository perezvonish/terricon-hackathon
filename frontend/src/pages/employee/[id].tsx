import React from 'react';
import {useRouter} from "next/router";
import {GetServerSideProps} from "next";
import LayoutWhite from "@/components/LayoutWhite";

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            masters: ""
        }
    }
}

const Page = ({masters, workType}) => {
    const router = useRouter()

    return (
        <LayoutWhite>
            asdsad
        </LayoutWhite>
    );
};

export default Page;