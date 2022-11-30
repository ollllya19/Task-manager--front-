import React, { useState, useEffect } from 'react';
import MainPage from './MainPage/MainPage'
import TasksSideBar from './SideBar/TasksSideBar'
import ProjectSideBar from './SideBar/ProjectsSideBar'

import { getIncomingTasks, getTodayTasks, getUpcomingTasks } from './services/TaskFilterService'
import { getAllProjects, getTasksofProject } from './services/ProjectService'
import SideBar from './SideBar/SideBar'
import Tasks from './SideBar/Tasks';


function App() {

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

  return (
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
  );
}

export default App;
