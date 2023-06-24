import React from 'react';
import Avatar from "@/components/profile/Avatar";
import Description from "@/components/profile/Description";
import ClientInfo from "@/components/profile/client/ClientInfo";
import ClientPhoto from "../../../../public/emptyPhoto.png"


const ClientProfile = () => {
    return (
        <div className="mx-auto my-10">
            <p className="text-2xl">
                ПРОФИЛЬ
            </p>
            <div className={`flex flex-row`}>
                <div className="mr-6 flex flex-col">
                    <Avatar image={ClientPhoto}/>
                    <Description />
                </div>
                <div className="mt-6">
                    <div>
                        Buttons
                    </div>
                    <ClientInfo />
                </div>
            </div>
        </div>
    );
};

export default ClientProfile;