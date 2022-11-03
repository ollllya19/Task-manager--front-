
export async function getTodayTasks() {
    try{
        const response = await fetch('/tasks/today');
        return await response.json();
    }catch(error) {
        return [];
    }
}

export async function getIncomingTasks() {
    try{
        const response = await fetch('/tasks/incoming');
        return await response.json();
    }catch(error) {
        return [];
    }
}

export async function getUpcomingTasks() {
    try{
        const response = await fetch('/tasks/upcoming');
        return await response.json();
    }catch(error) {
        return [];
    }
}