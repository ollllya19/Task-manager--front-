import React, { useState, useEffect } from 'react';
import MainPage from './MainPage/MainPage'
import TasksSideBar from './SideBar/TasksSideBar'
import ProjectSideBar from './SideBar/ProjectsSideBar'

import { getIncomingTasks, getTodayTasks, getUpcomingTasks } from './services/TaskFilterService'
import { getAllProjects, getTasksofProject } from './services/ProjectService'


function App() {

  const [tasks, setTasks] = useState([]);

  const [projects, setProjects] = useState([
    {id: 1, title: "Заголовок 1"},
    {id: 2, title: "Заголовок 2"},
    {id: 3, title: "Заголовок 3"},
  ]);

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

  const getProjectTasks = (event) => {
    // передаем название проекта в запрос
    getTasksofProject(event.target.value) 
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
        {/* Блок сайдбара с задачами */}
        <TasksSideBar
        // Сделать первую вкладку по умолчанию
          getIncomingTasks={getTasksIncoming}
          getTodayTasks={getTasksToday}
          getUpcomingTasks={getTasksUpcoming}>
        </TasksSideBar>
        {/* Блок с проектами */}
        <ProjectSideBar
          projects={projects}
          //changeProject={getProjectTasks}
        ></ProjectSideBar>

        {/* Блок с расположением всех задач вкладки */}
        <MainPage 
          tasks={tasks}
        ></MainPage>
    </div>
  );
}

export default App;
