import axios from 'axios';

const rootUrl = 'http://127.0.0.1:8000/task-manager';
 // user authorization token (for testing)
const config = {
    headers: {
        "Authorization" : "Token 1370f76a5da252b49cce28c962afa53be4276242"
    },
};

export async function getTodayTasks() {
    try{
        const url = `${rootUrl}/tasks/today`;
        return axios.get(url, config)
        .then(res => res.data);
    }catch(error) {
        console.log(error);
        return [];
    }
}

export async function getIncomingTasks() {
    try{
        const url = `${rootUrl}/tasks/incoming`;
        return axios.get(url, config)
        .then(res => res.data);
    }catch(error) {
        console.log(error);
        return [];
    }
}

export async function getUpcomingTasks() {
    try{
        const url = `${rootUrl}/tasks/upcoming`;
        return axios.get(url, config)
        .then(res => res.data);
    }catch(error) {
        console.log(error);
        return [];
    }
}