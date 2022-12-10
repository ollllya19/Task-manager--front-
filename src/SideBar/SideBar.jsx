import React from 'react'
import TasksSideBar from './TasksSideBar'
import ProjectsSideBar from './ProjectsSideBar'
import ProjectItem from './ProjectItem'
import "./styles_module.css"

import project from "./images/project.svg"
import settings from './images/settings.svg'


const SideBar = (props) => {


    const changeProject = (project_title) => {
        props.getProjectTasks(project_title)
    }

    return(
        <div>
            <aside className="aside-content">
            <div className="profile">
                <div className="profile-ava"></div>
                <div className="profile-description">
                    <div className="profile-description-title">Ильяс Аиткулов</div>
                    <div className="profile-description-subtitle">Моя рабочая область</div>
                </div>
                <div className="icon-settings">
                    <img src={settings}/></div>
                </div>
                <div className="sidebar-tabs">

                {/* Задачи */}
                <div className="sidebar-tabs-category">
                    <button className="sidebar-tabs-category-button"
                        onClick={props.getIncomingTasks}>
                        <img src={project}/>
                        Входящие
                    <div className="sidebar-tabs-category-quantity">7</div>
                    </button>
                    <button className="sidebar-tabs-category-button"
                        onClick={props.getTodayTasks}>
                        <img src={project}/>
                        Сегодня
                    <div className="sidebar-tabs-category-quantity">7</div>
                    </button>
                    <button className="sidebar-tabs-category-button"
                        onClick={props.getUpcomingTasks}>
                        <img src={project}/>
                        Предстоящие
                    <div className="sidebar-tabs-category-quantity">7</div>
                    </button>
                </div>

                <div className="divider-no">
                    <div className="divider-yes"></div>
                </div>

                {/* Проекты */}
                <div className="projects">
                    <div className="projects-title">Проекты</div>
                    { props.projects.map((project) =>
                        <ProjectItem
                            project={project}
                            onClick={() => changeProject(project.title)}
                        />
                    )}
                </div>
                </div>
        </aside>
        </div>
    )
}

export default SideBar
