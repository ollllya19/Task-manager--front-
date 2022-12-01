import React from 'react'
import background_img from "./images/Background with Image.svg"
import "./styles_module.css"

import { useState, useEffect } from 'react';
import Tasks from './Tasks';

import { getIncomingTasks, getTodayTasks, getUpcomingTasks } from '../services/TaskFilterService'
import { getAllProjects, getTasksofProject } from '../services/ProjectService'
import SideBar from './SideBar'


const MainPage = () => {

    const [tasks, setTasks] = useState([]);

    const [projects, setProjects] = useState([]);

    // tasks 
    const getTasksIncoming = () => {
        getIncomingTasks()
        .then(response => {
        console.log(response);
        setTasks(response);
        });
    }

    const getTasksToday = () => {
        getTodayTasks()
        .then(response => {
        console.log(response);
        setTasks(response);
        });
    }

    const getTasksUpcoming = () => {
        getUpcomingTasks()
        .then(response => {
        console.log(response);
        setTasks(response);
        });
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
        console.log(response);
        setTasks(response);
        });
    };

    // initial loading of tasks (incoming tasks)
    useEffect(() => {
        getTasksToday();
        getProjectsAll();
        }, []);


    return(
        <div>
            <SideBar
                getIncomingTasks={getTasksIncoming}
                getTodayTasks={getTasksToday}
                getUpcomingTasks={getTasksUpcoming}
                projects={projects}
            />
            <Tasks
                tasks={tasks}
            />
        </div>
    )
}

export default MainPage
