import React from 'react';
import general from "@/styles/general.module.scss"

const EmployeeButtons = () => {
    return (
        <div className="flex justify-around columns-3 text-center mb-2">
            <div className={`px-0 ${general.shadowBox}`}>
                Информация
            </div>
            <div className={`p-2 ${general.shadowBox}`}>
                Мои отзывы
            </div>
            <div className={`p-2 ${general.shadowBox}`}>
                Уведомления
            </div>
        </div>
    );
};

export default EmployeeButtons;