import React from 'react'
import tag_project from './images/tags-project.svg'
import tag_deadline from "./images/tags-deadline.svg"
import add from "./images/add.svg"

const DoneTask = ({tasks}) => {

    return(
        <div>
            <div class="todo">
                <div class="todo-name-column">
                    <div class="todo-name-column-2">
                    <div class="todo-name-column-2-title">Готово</div>
                    <div class="todo-name-column-2-quantity">2</div>
                    </div>
                    <button class="todo-name-column-create-task"><img src={add}/>Создать задачу</button>
                </div>
                <div class="todo-tasks">
                    <tbody>
                    {tasks.map((task, i) => 
                        <div class="todo-tasks-cardoftask">
                        <div class="todo-tasks-content">
                            <div class="todo-tasks-content-title">{task.task.title}</div>
                            <div class="todo-tasks-content-subtitle">{task.task.description}</div>
                        </div>
                        <div class="todo-tasks-tags">
                            {task.project !== null &&
                                <div class="todo-tasks-tags-project"><img src={tag_project}/>{task.project.title}</div>
                            }
                            {task.task.todo_date !== null &&
                                <div class="todo-tasks-tags-deadline"><img src={tag_deadline}/>{task.task.todo_date}</div>
                            }
                        </div>
                        <div class="todo-tasks-author">
                            <div class="todo-tasks-tags-author-tag">{task.user.username}</div>
                        </div>
                        </div>
                    )}
                </tbody>
                </div>
            </div>
        </div>
    )
}

export default DoneTask
