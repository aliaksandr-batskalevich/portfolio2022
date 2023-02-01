import {FeedbackDataType} from "../components/Main/ContactMe/FeedBack/FeedbackForm/FeedbackForm";
type ConverterPointType = 'preview' | 'emailJS';

// convert feedback from Object to String
export const feedbackDataConverter = (point: ConverterPointType, feedbackData: FeedbackDataType): string => {
    let {name, email, text, rating, comments} = feedbackData;
    let projectsList = Object.keys(rating).sort();
    let ratingsInTextArr = projectsList.map((pr, index) => `\n${index + 1}. ${pr} - ${rating[pr]} stars${comments[pr].length ? ` (${comments[pr]})` : ''}.`);
    let ratingsInTextStr = '';
    ratingsInTextArr.forEach(r => {
        ratingsInTextStr = ratingsInTextStr + r;
    });
    let emailJSText = `Feedback:\n ${text}${projectsList.length ? `\n\nProjects rating:${ratingsInTextStr}` : ''}`;

    let previewText = `You got a new feedback from ${name}.\nEmail: ${email}\n\n${emailJSText}`;

    return point === 'emailJS' ? emailJSText : previewText;
};

export const textCuter = (text: string, maxSize: number) => {
    let newText = text.slice(0, maxSize > 4 ? maxSize - 3 : maxSize);
    let dots = text === newText ? '' : '...';
    return  newText + dots;
};

