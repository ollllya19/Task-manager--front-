import React, { useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import "./styles.css"


const AddTaskDialog = ({isOpen, onClose, onTaskCreate}) => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDesc, setTaskDesc] = useState('')
    const [taskUser, setTaskUser] = useState('')
    const [taskStat, setTaskStat] = useState(1)
    const [project, setProject] = useState('')
    const [todoDate, setTodoDate] = useState('')

    const onTitleChange = (event) => {
        setTaskTitle(event.target.value)
    }

    const onDescChange = (event) => {
        setTaskDesc(event.target.value)
    }

    const onUserChange = (event) => {
        setTaskUser(event.target.value)
    }

    const setTodoStat = () => {
        setTaskStat('1')
    }
    const setDoingStat = () => {
        setTaskStat('2')
    }
    const setDoneStat = () => {
        setTaskStat('3')
    }
    const onProjectChange = (event) => {
        setProject(event.target.value)
    }
    const onTodoDateChange = (event) => {
        setTodoDate(event.target.value)
    }
    const onCancel = () => {
        setTaskTitle('')
        setTaskDesc('')
        setTaskStat('')
        setProject('')
        setTaskUser('')
        setTodoDate('')
        onClose()
    }
    const onSabmit = () => {
        onTaskCreate({
            title: taskTitle,
            desc: taskDesc,
            status: taskStat,
            project: project,
            todoDate: todoDate
        })
        onCancel()
    }


    return (
        <div className="container">
            {
                <Dialog
                    title="Dialog Title"
                    open={isOpen}>

                    <div className="create-new-task">
                    <div className="create-new-task-title">Создание новой задачи</div>
                    <div className="create-new-task-container">
                        <div className="create-new-task-input">Название задачи
                            <input className="create-new-task-fields"
                                onChange={onTitleChange}
                                placeholder="Введите название задачи"
                                value={taskTitle}/>
                        </div>
                        <div className="create-new-task-input">Описание задачи
                            <input className="create-new-task-fields" 
                                onChange={onDescChange}
                                placeholder="Введите описание задачи"
                                value={taskDesc}/>
                        </div>
                        <div className="create-new-task-input">Ответственный за задачу
                            <input className="create-new-task-fields" 
                                onChange={onUserChange}
                                placeholder="Введите пользователя"
                                value={taskUser}/>
                        </div>
                        <div className="create-new-task-input">Статус задачи
                            <div className="create-new-task-tab">
                                <button className="create-new-task-tab-container"
                                    onClick={setTodoStat}
                                    >To-Do
                                </button>
                                <button className="create-new-task-tab-container"
                                    onClick={setDoingStat}
                                    >Doing
                                </button>
                                <button className="create-new-task-tab-container"
                                    onClick={setDoneStat}
                                    >Done
                                </button>
                            </div>
                        </div>
                        <div className="create-new-task-project-deadline">
                            <div className="create-new-task-project-deadline-fields">Проект задачи
                                <input className="create-new-task-project-deadline-input" 
                                    onChange={onProjectChange}
                                    placeholder="Выберите проект задачи"
                                    value={project}
                                />
                            </div>
                            <div className="create-new-task-project-deadline-fields">Срок выполнения задачи
                                <input className="create-new-task-project-deadline-input" 
                                    onChangeName={onTodoDateChange}
                                    placeholder="Выберите дату"
                                    value={todoDate}
                            />
                            </div>
                        </div>
                    </div>
                    <div className="create-new-task-cta">
                        <button className="secondary-button"
                            onClick={onCancel}
                        >
                            Отмена
                        </button>
                        <button className="main-button"
                            onClick={onSabmit}
                        >
                            Создать задачу
                        </button>
                    </div>
                    </div>  
                </Dialog>
            }
        </div>
    );
    
}

export default AddTaskDialog
