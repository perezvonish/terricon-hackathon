import React, {useState} from 'react';
import general from "@/styles/general.module.scss"
import clientStyles from "@/styles/client-profile.module.scss"
import LayoutWhite from "@/components/LayoutWhite";
import EmployeeCard from "@/components/employee/EmployeeCard";
import GeneralWork from "../../../public/GeneralWork.png"
import CleaningRoom from "../../../public/CleaningRoom.png"
import Elect from "../../../public/Elect.png"
import {categoriesGetList} from "@/api/categories.api";
import Link from "next/link";

const Find = () => {
    const [searchResults, setSearchResults] = useState([]);

    const getList = async () => {
        const response = await categoriesGetList()

        console.log(response.data)
        return setSearchResults(response.data)
    }

    return (
        <LayoutWhite>
            <div className="my-6 mx-auto">
                <div>
                    <p className="text-black text-[4rem] font-extrabold leading-10">
                        Здесь профессионалы,
                    </p>
                    <p className="text-black text-[4rem] font-extrabold">которых вы ищите</p>
                </div>


                <div className="flex justify-between w-full mt-6">
                    <input type="text" onClick={getList} list="searchResults" className={`${clientStyles.inputBubble} w-full mr-6`} />
                    <datalist id="searchResults">
                        {searchResults.length > 0 && searchResults.map((result) => (
                            <option value={result}>{`${result}`}</option>
                        ))}
                    </datalist>

                    <Link href="/employee/list">
                        <button className={general.blueButton}>Найти</button>
                    </Link>
                </div>


                <div className={`flex mt-6 justify-evenly ${general.last}`}>
                    <EmployeeCard image={GeneralWork} description="Генеральная уборка" />
                    <EmployeeCard image={CleaningRoom} description="Уборка номеров" />
                    <EmployeeCard image={Elect} description="Сантехника" />
                </div>
            </div>
        </LayoutWhite>

    );
};

export default Find;