import React, {ChangeEvent, useState, MouseEvent} from 'react';
import s from './Rating.module.scss';
import {RatingType} from "../../../bll/projectsReducer";

type RatingPropsType = {
    isForm: boolean
    name: string
    averageRating: number
    currentRating: null | number

    changeCurrentRating: (newRating: RatingType) => void
}

export const Rating: React.FC<RatingPropsType> = ({isForm, name, averageRating, currentRating, changeCurrentRating}) => {

    const [preRating, setPreRating] = useState<null | number>(null);

    const setPreRatingHandler = (event: MouseEvent<HTMLInputElement>) => {
        setPreRating(+event.currentTarget.value)
    };
    const onMouseLeaveHandler = () => {
        setPreRating(null);
    };

    const setRatingHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let newRating = +event.currentTarget.value as RatingType;
        changeCurrentRating(newRating);
    };


    let valueToRender = isForm
        ? (preRating ?? currentRating ?? averageRating)
        : (currentRating ? currentRating : averageRating);
    let activeStyle = {
        width: `${( isForm 
            ? valueToRender 
            : (preRating ? preRating : currentRating ? currentRating : averageRating)
        ) * 20}%`
    };

    let starsToRender = [1, 2, 3, 4, 5].map(el => {
        return (
            <input
                key={el}
                type="radio"
                name={name}
                value={el}
                checked={el === currentRating}
                className={s.ratingRadio}
                onMouseEnter={setPreRatingHandler}
                onMouseLeave={onMouseLeaveHandler}
                onChange={setRatingHandler}
            />
        )
    });

    return (
        <div className={s.rating}>
            <div className={s.ratingBody}>
                <div className={s.ratingActive} style={activeStyle}/>
                <div className={s.ratingItems}>
                    {starsToRender}
                </div>
            </div>
            <div className={s.ratingValue}>{valueToRender}</div>
        </div>
    );
};