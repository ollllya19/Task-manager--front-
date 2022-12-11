import axios from 'axios';

const rootUrl = 'http://127.0.0.1:8000/task-manager'
const config = {
    headers: {
        "Authorization" : `Token ${localStorage.getItem('token')}`
    },
}

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
