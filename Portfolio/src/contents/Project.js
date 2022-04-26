import React, { Component } from 'react'

class Project extends Component {
    render() {
        return(
        <div className="condiv project">
            <h1 className="subtopic">Project</h1>

                <a href="https://wannee19.github.io/colmar-academy/" >
                <img src="./img/Colmar Academy.png" className="project-img" /></a>

                <a href="https://replit.com/@WanneeBuason/Challenge-Project-Find-Your-Hat#index.js" >
                <img src="./img/Find Your Hat.jpg" className="project-img" /></a>

                <a href="https://wannee19.github.io/jsd-jamming-assessment" >
                <img src="./img/Jamming.jpg" className="project-img" /></a>

                <a href="https://wannee19.github.io/" >
                <img src="./img/exercieswebapp.png" className="project-img" /></a>
        </div>
        );
    }
}

export default Project;
