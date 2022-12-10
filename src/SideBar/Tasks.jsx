import React, { useState, useEffect } from 'react'
import ToDoTask from './ToDoTask'
import DoingTask from './DoingTask'
import DoneTask from './DoneTask'
import AddTaskDialog from './AddTaskDialog'


const Tasks = ({todoTasks, doingTasks, doneTasks}) => {

    return(
        <div>
            <div class="main-content">
            <div class="main-content-container">
            <ToDoTask
                tasks={todoTasks}>
            </ToDoTask>
            <DoingTask
                tasks={doingTasks}>
            </DoingTask>
            <DoneTask
                tasks={doneTasks}>
            </DoneTask>
            <AddTaskDialog></AddTaskDialog>
            </div>
            </div>
        </div>
    )
}

export default Tasks
