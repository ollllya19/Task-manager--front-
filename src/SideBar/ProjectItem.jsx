import React from 'react'
import project2 from "./images/project2.svg"
import new_person from "./images/add-new-person.svg"


const ProjectItem = (props) => {

    return(
        <div>
            <button type="button" className="sidebar-tabs-category-button">
                    <img src={project2}/>
                            {props.project.title}
                    <img src={new_person}/>
            </button>
        </div>
    )
}

export default ProjectItem
