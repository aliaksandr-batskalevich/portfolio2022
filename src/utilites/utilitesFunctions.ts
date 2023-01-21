// convert feedback from Object to String

import {FeedbackDataType} from "../components/Main/ContactMe/FeedBack/FeedbackForm/FeedbackForm";

export const feedbackDataForPreviewConverter = (feedbackData: FeedbackDataType) => {
    let {name, email, text, rating, comments} = feedbackData;
    let projectsList = Object.keys(rating).sort();
    let ratingsInTextArr = projectsList.map((pr, index) => `\n${index + 1}. ${pr} - ${rating[pr]} stars${comments[pr].length ? ` (${comments[pr]})` : ''}.`);
    let ratingsInTextStr = '';
    ratingsInTextArr.forEach(r => {
        ratingsInTextStr = ratingsInTextStr + r;
    });

    let previewText = `You got a new feedback from ${name}./n Email: ${email}\n\nFeedback:\n ${text}${projectsList.length ? `\n\nProjects rating:${ratingsInTextStr}` : ''}`;

    return previewText;
};
