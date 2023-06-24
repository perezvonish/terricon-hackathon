import React from 'react';
import general from "@/styles/general.module.scss"
import Image from "next/image";
import FullStar from "../../../public/fullStar.svg"
import HalfStar from "../../../public/halfStar.svg"
import EmptyStar from "../../../public/emptyStar.svg"
import WorkerImage from "../../../public/WorkerWithPillow.png"

interface TopCardProps {
    id: number;
    name: string;
    rating: number;
    reviews: number;
}

const TopCard = ({id, name, rating, reviews}: TopCardProps) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(
                    <span key={i}>
                        <Image src={FullStar} alt="fullStar" />
                    </span>);
            } else {
                stars.push(
                    <span key={i}>
                        <Image src={EmptyStar} alt="emptyStar" />
                    </span>);
            }
        }

        return stars;
    };

    const renderReviews = () => {
        if (reviews == 1){
            return `${reviews} отзыв`
        }
        if (5 > reviews && reviews > 1){
            return `${reviews} отзыва`
        }

        return `${reviews} отзывов`
    }

    return (
        <div className="mx-6">
            <Image src={WorkerImage} alt="worker" className="w-32 h-32 mx-auto object-cover rounded-full" />
            <div className="my-2">{name}</div>
            <div className="flex flex-row items-center justify-center my-2">{renderStars()}</div>
            <div className="my-2">{renderReviews()}</div>
            <button className={`${general.emptyButton} self-center my-2`}>Подробней</button>
        </div>
    );
};

export default TopCard;