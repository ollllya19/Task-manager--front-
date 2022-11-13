import axios from 'axios';

// user authorization token
const config = {
    headers: {
        "Authorization" : "Token 1370f76a5da252b49cce28c962afa53be4276242"
    },
};

export async function getAllProjects() {
    try{
        const url = 'http://127.0.0.1:8000/task-manager/projects';
        return axios.get(url, config)
        .then(res => res.data);
    }catch(error) {
        console.log(error);
        return [];
    }
}

export async function createProject(data) {
    const response = await fetch('/project', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({task: data})
        })
    return await response.json();
}

export async function getProjectById() {
    try{
        const response = await fetch('/project');
        return await response.json();
    }catch(error) {
        return [];
    }
}

export async function deleteProject() {
    const response = await fetch('/project', {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
        })
    return await response.json();
}