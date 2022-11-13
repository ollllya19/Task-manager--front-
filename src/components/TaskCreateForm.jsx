import React from 'react'


const CreateTaskForm = ({onChangeForm, createTask }) => {

    return(
        <div>
        <div>
            <div>
            <h2>Create Task</h2>
            <form>
                <div>
                    <div>
                        <label>Название задачи  </label>
                        <input type="text" onChange={(e) => onChangeForm(e)} name="title" id="title" placeholder="Title"/>
                    </div>
                    <div>
                        <label>Описание задачи  </label>
                        <input type="text" onChange={(e) => onChangeForm(e)} name="description" id="description" placeholder="Description"/>
                    </div>
                </div>
                <button type="button" onClick= {(e) => createTask(e)}>Create</button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default CreateTaskForm