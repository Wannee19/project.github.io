import React, { Component } from 'react'
import profilepic from '../img/profile.jpg'

class About extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic">About Me</h1>
                <img src={profilepic}/>
                
                <h3>Hi, I'm Wannee</h3>
                <p>Experience in customer services role morethan 8 years, good personality, co-operatingwith others, ability to work under pressure totight deadlines, flexibility to handle changeand interested in learning new things.</p>
            </div>
        );
    }
}

export default About;
