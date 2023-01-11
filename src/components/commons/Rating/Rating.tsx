import React, {ChangeEvent, useState, MouseEvent} from 'react';
import s from './Rating.module.scss';

type RatingPropsType = {
    name: string
    averageRating: number
    currentRating: null | number

    setCurrentRating: (newRating: number) => void
}

export const Rating: React.FC<RatingPropsType> = ({name, averageRating, currentRating, setCurrentRating}) => {


    const [preRating, setPreRating] = useState<null | number>(null);

    const setPreRatingHandler = (event: MouseEvent<HTMLInputElement>) => {
        setPreRating(+event.currentTarget.value)
    };
    const onMouseLeaveHandler = () => {
        setPreRating(null);
    };

    const setRatingHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let newRating = +event.currentTarget.value;
        setCurrentRating(newRating);
    };

    let activeStyle = {
        width: `${(preRating ?? currentRating ?? averageRating) * 20}%`
    };

    let starsToRender = [1, 2, 3, 4, 5].map(el => {
        return (
            <input
                key={el}
                type="radio"
                name={name}
                value={el}
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
                <div className={s.ratingValue}>{currentRating ?? averageRating}</div>
            </div>
    );
};