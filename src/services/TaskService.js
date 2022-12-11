import axios from 'axios';

const rootUrl = 'http://127.0.0.1:8000/task-manager'
const config = {
    headers: {
        "Authorization" : `Token ${localStorage.getItem('token')}`
    }
}

export async function createTask(taskDict) {
    try{
        let body = {
            title: taskDict.title,
            desc: taskDict.desc,
            status: taskDict.status,
            project: taskDict.project,
            todoDate: taskDict.todoDate
        }
        console.log(taskDict)
        const url = `${rootUrl}/task`
        return axios.post(url,body, config)
        .then(res => res.data);
    }catch(error) {
        console.log(error);
        return [];
    }
}

// to do
export function getTaskById() {
    try{
        // user authorization token
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization" : "Token 1370f76a5da252b49cce28c962afa53be4276242"
            },
        };
        const url = 'http://127.0.0.1:8000/task-manager/tasks/today';
        return axios.get(url, config)
        .then(res => res.data);
    }catch(error) {
        console.log(error);
        return [];
    }
}

// to check
export async function deleteTask() {
    const response = await fetch('/task', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
        })
    return await response.json();
}
