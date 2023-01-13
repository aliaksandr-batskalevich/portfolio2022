import {ThunkDispatch} from "redux-thunk";
import {ActionsType, RootAppStateType} from "../bll/store";
import {useDispatch} from "react-redux";

export type ThunkAppDispatchType = ThunkDispatch<RootAppStateType, any, ActionsType>

export const useAppDispatch = () => useDispatch<ThunkAppDispatchType>();