import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AppointmentListBox extends Component {

    render() {
        return <div id="app-list-box"><a><Link to="/AppointmentList">Appointments List</Link></a></div>

    }

}

export default AppointmentListBox
