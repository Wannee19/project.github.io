import React, { Component } from 'react';
import profilepic from '../img/profile.jpg'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic}  alt="profile" className="profilepic" />
    
                <ReactTypingEffect text={['I am Wannee', 'I want to be software tester']} speed={50} eraseDelay={80} className="typingeffect" />
                <p>Experience in customer services role more than 8 years, good personality, co-operating with others, ability to work under pressure to tight deadlines, flexibility to handle change and interested in learning new things.</p>
                
            </div>
        );
    }
}

export default Home;