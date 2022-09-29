import React from "react";
import s from './Main.module.css'

export const Main = () => {
    return (
        <div className={s.mainWrapper}>
            <div className='container'>
                <main>
                    <div className={s.shortInf}>
                        <h2>I am Aliaksandr Batskalevich</h2>
                        <div>WRITER</div>
                        <div>short information COUNTRY AGE STATUS</div>
                    </div>
                </main>
            </div>
        </div>
    )
}