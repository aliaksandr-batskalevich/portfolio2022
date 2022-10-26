import React from "react";
import s from './Home.module.css'

export const Home = () => {
    return (
        <div className={s.homePageWrapper}>
            <div className='container'>
                <div className={s.shortInf}>
                    <h3>I'm Aliaksandr Batskalevich</h3>
                    <div className={s.writer}>PROGRAMMER</div>
                    <div className={s.smallBlockWrapper}>
                        <div className={s.smallBlock}>
                            <h4>Country</h4>
                            <p>Belarus</p>
                        </div>
                        <div className={s.smallBlock}>
                            <h4>Status</h4>
                            <p>Open to work</p>
                        </div>
                        <div className={s.smallBlock}>
                            <h4>Age</h4>
                            <p>34</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}