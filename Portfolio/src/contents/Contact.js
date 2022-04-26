import React, { Component } from 'react'


import Social from '../components/Social'

class Contact extends Component {
    render() {
        return(
            <div className="condiv contact">
                <h1 className="subtopic">Contact Me</h1>
                <h3><img src="./img/phone.png" /> +665 597 4141 </h3>
                <h3><img src="./img/Email.png" /> wannee.bu19@gmail.com</h3>
                <h3><img src="./img/Address.png" /> Donmuang Bangkok</h3>
                <Social />
            </div>
        );
    }
}

export default Contact;
