import axios from 'axios';

// пока не работает

export async function createTask(data) {
    const response = await fetch('/task', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({task: data})
        })
    return await response.json();
}

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


export async function deleteTask() {
    const response = await fetch('/task', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
        })
    return await response.json();
}
