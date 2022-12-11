import React, { useState, useEffect } from 'react'
import ToDoTask from './ToDoTask'
import DoingTask from './DoingTask'
import DoneTask from './DoneTask'
import AddTaskDialog from './AddTaskDialog'
import { createTask } from '../services/TaskService'


const Tasks = ({todoTasks, doingTasks, doneTasks}) => {
    
    const [isDlgOpen, setIsDlgOpen] = useState(false);
    
    const openTaskDialog = () => {
        setIsDlgOpen(true)
    }

    const closeTaskDialog = () => {
        setIsDlgOpen(false)
    }

    const onCreateTask = (taskDict) => {
        createTask(taskDict)
        .then(response => {
        console.log(response)
        });
    }


    return(
        <div>
            <div class="main-content">
            <div class="main-content-container">
            <ToDoTask
                tasks={todoTasks}
                openTaskDialog={openTaskDialog}>
            </ToDoTask>
            <DoingTask
                tasks={doingTasks}
                openTaskDialog={openTaskDialog}>
            </DoingTask>
            <DoneTask
                tasks={doneTasks}
                openTaskDialog={openTaskDialog}>
            </DoneTask>
            <AddTaskDialog
                isOpen={isDlgOpen}
                onClose={closeTaskDialog}
                onTaskCreate={onCreateTask}
            ></AddTaskDialog>
            </div>
            </div>
        </div>
    )
}

export default Tasks
