import axios from "axios";

const codeWarsInstance = axios.create({
    baseURL: 'https://www.codewars.com/api/v1/',
})

export const codeWarsAPI = {
    getUserData(userName: string) {
        return codeWarsInstance.get(`users/${userName}`);
    }
};