 import React, { Component } from 'react'
 import Widecard from '../components/Widecard1';

 class Education extends Component {
     render() {
         return(
             <div className="condiv">
                 <h1 className="subtopic">Education</h1>
                 <Widecard title="Junior Software Developer" where="Generation Booth Camp" from="2022 Jan" to="2022 Apr" />
                 <Widecard title="Bachelor’s degree of Science, Major Information technology" where="Silpakorn University" from="2009" to="2012" />
             </div>
         );
     }
 }
 
 export default Education;