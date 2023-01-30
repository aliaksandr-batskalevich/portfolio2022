import {ThunkDispatch} from "redux-thunk";
import {ActionsType, RootAppStateType} from "../bll/store";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {FeedbackInLocalStorageDataType} from "../components/Main/ContactMe/FeedBack/FeedbackForm/FeedbackForm";

// custom hook USE_DISPATCH
export type ThunkAppDispatchType = ThunkDispatch<RootAppStateType, any, ActionsType>
export const useAppDispatch = () => useDispatch<ThunkAppDispatchType>();

// custom hook USE_LOCAL_STORAGE
const getStorageValue = (key: string, defaultValue: FeedbackInLocalStorageDataType) => {
    // getting stored value
    const saved = localStorage.getItem(key);
    if (saved) {
        return  JSON.parse(saved);
    }
    return defaultValue;
};
export const useLocalStorage = (key: string, defaultValue: FeedbackInLocalStorageDataType) => {
    const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

    useEffect(() => {
        // storing input name
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};