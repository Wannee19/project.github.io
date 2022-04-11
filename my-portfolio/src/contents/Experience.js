import React, { Component } from 'react'
import Widecard from '../components/Widecard';

class Experience extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">Experience</h1>

                <Widecard title="Sales Support Supervisor" where="Thai Lion Mentari Company" from="2019 Jun" to="Present" text="Responsibilities"
                    content1="Managing the correspondence between sales teamand our customers."
                    content2="Providing data and reports to help sales team."
                    content3="Answering customer’s inquiries by email andtelephone."/>


                <Widecard title="Senior Support Supervisor" where="Thai Lion Mentari Company" from="2017 Oct" to="2019 Jun" text="Responsibilities"
                    content1="Managing the correspondence between sales teamand our customers."
                    content2="Providing data and reports to help sales team."
                    content3="Answering customer’s inquiries by email andtelephone."/>

                <Widecard title="Passenger Service Senior" where="Thai Lion Mentari Company" from="2014 Mar" to="2017 Sep" text="Responsibilities"
                    content1="Providing information to passengers."
                    content2="Providing helpful service to the passenger."
                    content3="Coordinating with the other departments including government organizations."/>

                <Widecard title="Customer service" where="Thai Airway Airline" from="2013 Jul" to="2014 Mar" text="Responsibilities"
                    content1="Providing airline information, route, price of ticket, airline promotion and ticket booking service."
                    content2="Help and answer basic service problems."
                    content3="Receive complaints and suggest for solving problemsfor customers by telephone."/>
            </div>
        );
    }
}

export default Experience;