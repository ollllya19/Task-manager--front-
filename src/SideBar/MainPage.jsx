import React from 'react'
import "./styles_module.css"

import { useState, useEffect } from 'react';
import Tasks from './Tasks';

import { getIncomingTasks, getTodayTasks, getUpcomingTasks } from '../services/TaskFilterService'
import { getAllProjects, getTasksofProject } from '../services/ProjectService'
import SideBar from './SideBar'


const MainPage = () => {

    const [tasks, setTasks] = useState([]);
    const [todoTasks, setTodoTasks] = useState([])
    const [doingTasks, setDoingTasks] = useState([])
    const [doneTasks, setDoneTasks] = useState([])

    const [projects, setProjects] = useState([]);

    // tasks 
    const getTasksIncoming = () => {
        getIncomingTasks()
        .then(response => {
        console.log(response);
        setTasks(response);
        });
        setFilteredTasks()
    }

    const getTasksToday = () => {
        getTodayTasks()
        .then(response => {
        console.log(response);
        setTasks(response);
        });
        setFilteredTasks()
    }

    const getTasksUpcoming = () => {
        getUpcomingTasks()
        .then(response => {
        console.log(response);
        setTasks(response);
        });
        setFilteredTasks()
    }

    // projects
    const getProjectsAll = () => {
        getAllProjects() 
        .then(response => {
        console.log(response);
        setProjects(response);
        });
    };

    const getProjectTasks = (project_title) => {
        console.log(project_title);
        getTasksofProject(project_title) 
        .then(response => {
        console.log(response)
        setTasks(response)
        setFilteredTasks()
        });
    };
    
    useEffect(() => {
        getTasksToday()
        getProjectsAll()
        setFilteredTasks()
    }, []);

    const setFilteredTasks = () => {
        let todo = []
        let doing = []
        let done = []
        for(let i = 0; i < tasks.length; i ++){
            if (tasks[i].task.status === 1){
                todo.push(tasks[i])
            } else if (tasks[i].task.status === 2){
                doing.push(tasks[i])
            } else if (tasks[i].task.status === 3){
                done.push(tasks[i])
            }
        }
        setTodoTasks(todo)
        setDoingTasks(doing)
        setDoneTasks(done)
    }


    return(
        <div>
            <SideBar
                getIncomingTasks={getTasksIncoming}
                getTodayTasks={getTasksToday}
                getUpcomingTasks={getTasksUpcoming}
                projects={projects}
                getProjectTasks={getProjectTasks}
            />
            <Tasks
                todoTasks={todoTasks}
                doingTasks={doingTasks}
                doneTasks={doneTasks}
            />
        </div>
    )
}

export default MainPage
