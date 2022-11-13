import React, { useState, useEffect } from 'react';
import MainPage from './MainPage/MainPage'
import SideBar from './SideBar/SideBar'

import { getIncomingTasks, getTodayTasks, getUpcomingTasks } from './services/TaskFilterService'
import { getAllProjects } from './services/ProjectService'


function App() {

  // Дофолтные такси для тестирования (поменять позже)
  const [tasks, setTasks] = useState([
    {id: 1, title: 'Питон 1'},
    {id: 2, title: 'Питон 2'},
    {id: 3, title: 'Питон 3'},
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
    setTasks(response);
    });
  }

  return (
    <div>
        {/* Блок сайдбара */}
        <SideBar
          getIncomingTasks={getProjectsAll}
          getTodayTasks={getTasksToday}
          getUpcomingTasks={getTasksUpcoming}
          //getAllProjects={getProjectsAll}
        />

        {/* Блок с расположением всех задач вкладки */}
        <MainPage tasks={tasks}/>

    </div>
  );
}

export default App;
