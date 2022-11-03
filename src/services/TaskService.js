
export async function createTask(data) {
    const response = await fetch('/task', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({task: data})
        })
    return await response.json();
}

export async function getAllTasks() {
    try{
        const response = await fetch('/tasks');
        return await response.json();
    }catch(error) {
        return [];
    }
}

export async function getTaskById() {
    try{
        const response = await fetch('/tasks');
        return await response.json();
    }catch(error) {
        return [];
    }
}
