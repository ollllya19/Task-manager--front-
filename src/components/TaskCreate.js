import React from 'react'


const CreateTask = ({onChangeForm, createTask }) => {


    return(
        <div>
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Create Task</h2>
                <form>
                    <div>
                        <div>
                            <label htmlFor="exampleInputEmail1">Название задачи</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} name="firstname" id="title" aria-describedby="emailHelp" placeholder="First Name" />
                        </div>
                        <div>
                            <label htmlFor="exampleInputPassword1">Описание задачи</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} name="lastname" id="description" placeholder="Last Name" />
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => createTask()}>Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser