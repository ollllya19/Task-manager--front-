import axios from 'axios';
const rootUrl = 'http://127.0.0.1:8000/task-manager';

// user authorization token
const config = {
    headers: {
        "Authorization" :  `Token ${localStorage.getItem('token')}`
    },
};

export async function getAllProjects() {
    try{
        const url = `${rootUrl}/projects`;
        return axios.get(url, config)
        .then(res => res.data);
    }catch(error) {
        console.log(error);
        return [];
    }
}

export async function getTasksofProject(projectName) {
    try{
        const url = `${rootUrl}/project/${projectName}`;
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