import React, { useState } from 'react'
import tag_project from './images/tags-project.svg'
import tag_deadline from "./images/tags-deadline.svg"


const Tasks = ({tasks}) => {

    return(
        <div>
            <div className="main-content">
            <div className="todo">
                <div className="todo-name-column">
                    <div className="todo-name-column-2">
                    <div className="todo-name-column-2-title">To Do</div>
                    <div className="todo-name-column-2-quantity">2</div>
                    </div>
                    <button className="todo-name-column-create-task">Создать задачу</button>
                </div>
                {/* Колонка */}
                <div className="todo-tasks">
                    <div className="todo-tasks-cardoftask">
                    <div className="todo-tasks-content">
                        <div className="todo-tasks-content-title">{tasks[0].title}</div>
                        <div className="todo-tasks-content-subtitle">{tasks[0].description}</div>
                    </div>
                    <div className="todo-tasks-tags">
                        <div className="todo-tasks-tags-project"><img src={tag_project}/>УГАТУ</div>
                        <div className="todo-tasks-tags-deadline"><img src={tag_deadline}/>12 сентября</div>
                    </div>
                    <div className="todo-tasks-author">
                        <div className="todo-tasks-tags-author-tag">Камил Ястров</div>
                    </div>
                    </div>
                </div>
                
                </div>

                {/* --------------------- копия */}
                
            </div>
        </div>
    )
}

export default Tasks