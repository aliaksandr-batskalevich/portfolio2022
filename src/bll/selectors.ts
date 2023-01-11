import {RootAppStateType} from "./store";
import {GeneralInfoStateType} from "./generalInfoReducer";

export const getGeneralInfo = (state: RootAppStateType): GeneralInfoStateType => state.generalInfo;