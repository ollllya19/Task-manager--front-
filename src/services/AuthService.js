// File with user creating and user login requests

import axios from 'axios';

const rootUrl = 'http://127.0.0.1:8000/task-manager';

export async function createUser(name, mail, password) {
    try{
        const url = `${rootUrl}/auth/users/`;
        return axios.post(url, {
            username : name,
            password : password
        })
        .then(res => res.data);
    }catch(error) {
        console.log(error);
        return [];
    }
}

export async function loginUser(name, password) {
    try{
        const url = `${rootUrl}/token/login/`;
        return axios.post(url, {
            username : name,
            password : password
        })
        .then(res => res.data);
    }catch(error) {
        console.log(error);
        return [];
    }
}
