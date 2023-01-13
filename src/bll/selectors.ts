import {RootAppStateType} from "./store";
import {GeneralInfoStateType} from "./generalInfoReducer";
import {MyQuoteType, SkillType} from "./aboutMeReducer";
import {LinksType} from "./contactsReducer";
import {createSelector} from "reselect";
import {CurrentProjectRatingType, ProjectType} from "./projectsReducer";
import {ProjectFilterType} from "./definitionsReducer";
import {CodeWarsDataType} from "./challengeReducer";
import {ResumeStateType} from "./resumeReduucer";

// definitions
export const getFollowMeNetworks = (state: RootAppStateType): Array<string> => state.definitions.followMeNetworks;
export const getCurrentProjectFilter = (state: RootAppStateType): ProjectFilterType => state.definitions.currentProjectFilter;
export const getTimeToProjectsColorEffectSec = (state: RootAppStateType): number => state.definitions.timeToProjectsColorEffectSec;
export const getTimeToProjectMenuOpenCloseSec = (state: RootAppStateType): number => state.definitions.timeToProjectMenuOpenCloseSec;


// generalInfo
export const getGeneralInfo = (state: RootAppStateType): GeneralInfoStateType => state.generalInfo;


// contacts
export const getCountry = (state: RootAppStateType): string => state.contacts.address.country;
export const getPhoneNumber = (state: RootAppStateType): string => state.contacts.phoneNumber;
export const getLinksObj = (state: RootAppStateType): LinksType => state.contacts.links;
// selectors by RESELECT
export const getFollowMeLinksArr = createSelector(getLinksObj, getFollowMeNetworks, (links, followMeDefinitions) => {
    let allLinksArr = Object.values(links);
    return  allLinksArr.filter(link => followMeDefinitions.some(fm => fm.toLowerCase() === link.title.toLowerCase()));
});


// aboutMe
export const getMainQualities = (state: RootAppStateType): Array<string> => state.aboutMe.mainQualities;
export const getSummary = (state: RootAppStateType): string => state.aboutMe.summary;
export const getSkills = (state: RootAppStateType): Array<SkillType> => state.aboutMe.skills;
export const getMyQuote = (state: RootAppStateType): MyQuoteType => state.aboutMe.myQuote;


// myProjects
export const getMyProjects = (state: RootAppStateType): Array<ProjectType> => state.projects.myProjects;
export const getCurrentProjectRating = (state: RootAppStateType): CurrentProjectRatingType => state.projects.currentProjectRating;
// selectors by RESELECT
export const getFilteredProjects = createSelector(getCurrentProjectFilter, getMyProjects, (currentProjectFilter, myProjects): Array<ProjectType> => {
    if (currentProjectFilter === 'ALL') return myProjects;
    return myProjects.filter(pr => pr.tools.some(t => t === currentProjectFilter));
});

// challenge
export const getChallengeDescriptions = (state: RootAppStateType): string => state.challenge.descriptions;
export const getIsDataFetching = (state: RootAppStateType): boolean => state.challenge.isDataFetching;
export const getIsFetchingError = (state: RootAppStateType): null | string => state.challenge.isFetchingError;
export const getCodeWarsData = (state: RootAppStateType): CodeWarsDataType => state.challenge.codeWarsData;

// resume
export const getResumeState = (state: RootAppStateType): ResumeStateType => state.resume;