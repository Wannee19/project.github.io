import React, { Component } from 'react'

class Skills extends Component {
    render() {
        return(
        <div className="condiv skills">
            <h1 className="subtopic">Skills</h1>

            <h3 className="subtopic">Technology</h3>
                <img src="./img/HTML.png" />
                <img src="./img/CSS.png" />
                <img src="./img/JS.png" />
                
            <h3 className="subtopic">Framework</h3>
                <img src="./img/MERN.jpeg" />

            <h3 className="subtopic">Tool</h3>
            <img src="./img/Github.png" />
            <img src="./img/VS Code.png" />

        </div>
        );
    }
}

export default Skills;
