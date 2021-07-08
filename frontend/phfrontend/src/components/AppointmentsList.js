import React, {useState, Component} from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

import '../styles/appointmentlistbox.css'

class AppointmentsList extends Component {

  constructor(props) {
      super(props);
      this.state = {
          data: []
      }
    }


    cancelAppointment(id){
      var api_url = "http://localhost:8080/appointments/"+id;
      fetch (api_url,{
              method:"DELETE",
      }).then(window.alert("Appointment Canceled"))
          .then(window.location.href = "/AppointmentList");
    }

    componentDidMount() {
        var api_url = "http://localhost:8080/appointments";
        fetch(api_url).then(response => response.json()).then(data => {
            this.setState({data: data})
        })
    }

    render() {
        return (
            <div>
            <h1>Appointments List</h1>
                {this.state.data.map((appt, index) => (
                    <div>
                        <p>Doctor: {appt.doctor.firstname} {appt.doctor.lastname}</p>
                        <p>Patient: {appt.patient.firstname} {appt.patient.lastname}</p>
                        <p>Start time: {(new Date(appt.starttime)).toLocaleString('en-US', {timeZone: 'Pacific/Honolulu'})}</p>
                        <p>End time: {(new Date(appt.endtime)).toLocaleString('en-US', {timeZone: 'Pacific/Honolulu'})}</p>
                        <DeleteIcon onClick={() => this.cancelAppointment(appt.id)}>Cancel Appointment</DeleteIcon>
                    </div>
                ))}
            </div>
        )
    }

}

export default AppointmentsList
