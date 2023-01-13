import {ActionsType} from "./store";
import {v1} from "uuid";
import gmailLogo from '../assets/images/gmailLogo.png';
import telegramLogo from '../assets/images/telegramLogo.png';
import linkedInLogo from '../assets/images/linkedInLogo.png';
import gitHubLogo from '../assets/images/GitHubLogo.jpg';
import codeWarsLogo from '../assets/images/codeWarsLogo.png';

type AddressType = {
    country: string
    city: {
        title: string
        street: string
    }
}
export type LinkType = {
    id: string
    title: string
    link: string
    logo: string
}
export type LinksType = {
    [key: string]: LinkType
};
export type ContactsStateType = {
    address: AddressType
    phoneNumber: string
    links: LinksType
}

const contactsInitState: ContactsStateType = {
    address: {
        country: 'Belarus',
        city: {
            title: 'Brest',
            street: 'Rokossovskogo, 2v'
        },
    },
    phoneNumber: '+375298072888',
    links: {
        email: {
            id: v1(),
            title: 'Email',
            link: 'aliaksandr.batskalevich@gmail.com',
            logo: gmailLogo,
        },
        telegram: {
            id: v1(),
            title: 'Telegram',
            link: 'https://t.me/aliaksandr_batskalevich',
            logo: telegramLogo,
        },
        linkedIn: {
            id: v1(),
            title: 'LinkedIn',
            link: 'https://www.linkedin.com/in/aliaksandr-batskalevich',
            logo: linkedInLogo,
        },
        gitHub: {
            id: v1(),
            title: 'GitHub',
            link: 'https://github.com/aliaksandr-batskalevich',
            logo: gitHubLogo,
            },
        codeWars: {
            id: v1(),
            title: 'CodeWars',
            link: 'https://www.codewars.com/users/aliaksandr-batskalevich',
            logo: codeWarsLogo,
            },
    },
};

export const contactsReducer = (state: ContactsStateType = contactsInitState, action: ActionsType) => {
    switch (action.type) {
        default:
            return state;
    }
};