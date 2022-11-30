import React, { useState } from 'react'


const ProjectSideBar = ({projects, changeProject}) => {

    return(
        <div>
            { projects.map((project) =>
                <li><button type="button" onClick={() => changeProject(project.title)}>{project.title}</button></li>
            )}
        </div>
    )
}

export default ProjectSideBar
