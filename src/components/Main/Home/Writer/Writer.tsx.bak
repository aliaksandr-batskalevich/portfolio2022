import React, {useEffect, useState} from 'react';
import s from "./Writer.module.scss";

const writer = async (callback: (str: string) => void, wordsArr: Array<string>) => {
    wordsArr = wordsArr.map(el => ' ' + el);
    for (const word of wordsArr) {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < word.length; j++) {
                let limit = !i ? j + 1 : word.length - j;
                let letters = word.split('', limit).join('');
                await new Promise((res) => {
                    setTimeout(res, !i ? 180 : 80)
                });
                callback(letters);
            }
            await new Promise((res) => {
                setTimeout(res, 400);
            })
        }
    }
};

const Writer = () => {

    // from BLL:
    let wordsArr = ['PROGRAMMER', 'REACT-DEVELOPER', 'JS-DEVELOPER', 'HTML-DEVELOPER', 'CONSTRUCTOR', 'FRIENDLY PERSON', 'INTELLECTUAL PERSON'];

    const [wordToRender, setWordToRender] = useState<string>('');
    const [isCursor, setIsCursor] = useState<boolean>(true);
    const [isFinish, setIsFinish] = useState<boolean>(false);

    // useEffect for start WRITER function
    useEffect(() => {
        writer(setWordToRender, wordsArr)
            .then(() => {
                setIsFinish(true)
            });
    }, []);

    // useEffect for CURSOR
    useEffect(() => {
        if (isFinish) {
            let intervalId = setInterval(() => {
                setIsCursor(!isCursor);
            }, 600);
            return () => {
                clearInterval(intervalId)
            }
        }
    }, [isFinish, isCursor]);

    return (
        <div className={s.writerWrapper}>
            <div className={s.writer}>{wordToRender}</div>
            {isCursor && <div className={s.cursor}>|</div>}
        </div>
    );
};

export default React.memo(Writer);