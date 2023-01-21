import {RootAppStateType} from "./store";
import {GeneralInfoStateType} from "./generalInfoReducer";
import {MyQuoteType, SkillType} from "./aboutMeReducer";
import {ContactsPatternType, LinksType, MyContactsType} from "./contactsReducer";
import {createSelector} from "reselect";
import {ProjectToRatingType, ProjectType} from "./projectsReducer";
import {EmailJSKeysType, FeedbackModeType, ProjectFilterType} from "./definitionsReducer";
import {CodeWarsDataType} from "./challengeReducer";
import {ResumeStateType} from "./resumeReduucer";

// definitions
export const getFollowMeNetworks = (state: RootAppStateType): Array<string> => state.definitions.followMeNetworks;
export const getCurrentProjectFilter = (state: RootAppStateType): ProjectFilterType => state.definitions.currentProjectFilter;
export const getTimeToProjectsColorEffectSec = (state: RootAppStateType): number => state.definitions.timeToProjectsColorEffectSec;
export const getTimeToProjectMenuOpenCloseSec = (state: RootAppStateType): number => state.definitions.timeToProjectMenuOpenCloseSec;
export const getFeedbackMode = (state: RootAppStateType): FeedbackModeType => state.definitions.feedbackMode;
export const getFeedbackPreview = (state: RootAppStateType): string => state.definitions.feedbackPreview;
export const getEmailJSKeys = (state: RootAppStateType): EmailJSKeysType => state.definitions.emailJSKeys;


// generalInfo
export const getGeneralInfo = (state: RootAppStateType): GeneralInfoStateType => state.generalInfo;


// contacts
export const getCountry = (state: RootAppStateType): string => state.contacts.address.country;
export const getPhoneNumber = (state: RootAppStateType): string => state.contacts.phoneNumber;
export const getLinksObj = (state: RootAppStateType): LinksType => state.contacts.links;
export const getContactsPattern = (state: RootAppStateType): ContactsPatternType => state.contacts.contactsPattern;
// selectors by RESELECT
export const getFollowMeLinksArr = createSelector(getLinksObj, getFollowMeNetworks, (links, followMeDefinitions) => {
    let allLinksArr = Object.values(links);
    return allLinksArr.filter(link => followMeDefinitions.some(fm => fm.toLowerCase() === link.title.toLowerCase()));
});
export const getMyContacts = createSelector(getPhoneNumber, getLinksObj, (myPhoneNumber: string, myLinksObj: LinksType): MyContactsType => {
    let resultArr = [{title: 'Phone Number', value: myPhoneNumber}];
    let linksValues = Object.values(myLinksObj);
    for (let linksValue of linksValues) {
        resultArr.push({title: linksValue.title, value: linksValue.link});
    }
    return resultArr;
});
export const getMyContactsPatternSort = createSelector(getMyContacts, getContactsPattern, (myContacts: MyContactsType, contactsPattern: ContactsPatternType): MyContactsType => contactsPattern.map(cp => myContacts.find(c => c.title === cp) ?? {title: cp, value: 'Not found'}));

// aboutMe
export const getMainQualities = (state: RootAppStateType): Array<string> => state.aboutMe.mainQualities;
export const getSummary = (state: RootAppStateType): string => state.aboutMe.summary;
export const getSkills = (state: RootAppStateType): Array<SkillType> => state.aboutMe.skills;
export const getMyQuote = (state: RootAppStateType): MyQuoteType => state.aboutMe.myQuote;


// myProjects
export const getMyProjects = (state: RootAppStateType): Array<ProjectType> => state.projects.myProjects;
// selectors by RESELECT
export const getToolsFilteredProjects = createSelector(getCurrentProjectFilter, getMyProjects, (currentProjectFilter, myProjects): Array<ProjectType> => {
    if (currentProjectFilter === 'ALL') return myProjects;
    return myProjects.filter(pr => pr.tools.some(t => t === currentProjectFilter));
});
export const getMyProjectsInRatingType = createSelector(getMyProjects, (myProjects: Array<ProjectType>): Array<ProjectToRatingType> => myProjects.map(pr => ({
    id: pr.id,
    title: pr.title,
    rating: pr.rating,
    comments: pr.comments,
})));
export const getProjectsToRating = createSelector(getMyProjectsInRatingType, (myProjectsInRatingType: Array<ProjectToRatingType>): Array<ProjectToRatingType> => myProjectsInRatingType.filter(pr => pr.rating.currentRating !== null));
export const getProjectsToRatingDataSort = createSelector(getProjectsToRating, (projectsToRating: Array<ProjectToRatingType>): Array<ProjectToRatingType> => projectsToRating.sort((a, b) => a.rating.dateCurrentRatingAdd && b.rating.dateCurrentRatingAdd && a.rating.dateCurrentRatingAdd > b.rating.dateCurrentRatingAdd ? 1 : -1));
export const getProjectsTitlesForRatingSelectSort = createSelector(getMyProjects, getProjectsToRatingDataSort, (myProjects: Array<ProjectType>, projectsToRating: Array<ProjectToRatingType>): Array<string> => myProjects
    .filter(pr => !projectsToRating.some(rp => rp.id === pr.id))
    .map(pr => pr.title)
    .sort());

// challenge
export const getChallengeDescriptions = (state: RootAppStateType): string => state.challenge.descriptions;
export const getIsDataFetching = (state: RootAppStateType): boolean => state.challenge.isDataFetching;
export const getIsFetchingError = (state: RootAppStateType): null | string => state.challenge.isFetchingError;
export const getCodeWarsData = (state: RootAppStateType): CodeWarsDataType => state.challenge.codeWarsData;


// resume
export const getResumeState = (state: RootAppStateType): ResumeStateType => state.resume;