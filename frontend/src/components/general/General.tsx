import React from 'react';
import Welcome from "@/components/general/Welcome";
import TopFive from "@/components/general/TopFive";
import LayoutGradient from "@/components/LayoutGradient";
import Gallery from "@/components/general/Gallery";

const General = () => {
    return (
        <div className="flex flex-col text-center mt-6 mx-auto">
            <Welcome />
            <LayoutGradient>
                <TopFive />
                <Gallery />
            </LayoutGradient>
        </div>
    );
};

export default General;