import React, {useState, Component} from 'react';

class AppointmentsList extends Component {

  constructor(props) {
      super(props);
      // This binding is necessary to make `this` work in the callback
      // this.cancelAppointment = this.cancelAppointment.bind(this);
    }

    cancelAppointment(){
      var id = parseInt(window.prompt('Enter appointment id:'));
      var api_url = "http://localhost:8080/appointments/"+id;
      fetch (api_url,{
              method:"DELETE",
      }).then(window.alert("appointment canceled"));
    }

    componentDidMount() {
      
        var api_url = "http://localhost:8080/appointments";
        fetch(api_url).then(response => response.json()).then(data => {
            // data is the returned array
            console.log(data);
            var i, html = "";

            for (i = 0; i < data.length; i++) {
                var id =  data[i].id ; //id
                var startTime = '<div>Start Time: ' + data[i].starttime + '</div>'
                var endTime = '<div id="p-price">End Time: ' + data[i].endtime + '</div> <br><br>'
                var doctorid = '<div >Doctor: ' + data[i].doctor.firstname + ' ' + data[i].doctor.lastname  + '</div>';
                var patientid = '<div >Patient: ' + data[i].patient.firstname + ' ' + data[i].doctor.lastname + '</div>';
                html += '<button id='+id+' onClick='+'{this.cancelAppointment}'+'>Cancel appointment</button>'+'<p>     </p>'
                        +'<div id = "appointment-info-container">' + id + doctorid + patientid + startTime + endTime + '</div><hr>';
                
            }
            document.getElementById("appointment-container").innerHTML = html; // insert content
            document.getElementById("appointment-container").style.display = "block"; // show parts container

        }) // end then(data ==>)

    }

    

    render() {
        return (

            <div>
            <button onClick={this.cancelAppointment}>
              Cancel appt
            </button>
                <h1>Appointments List</h1>
                <div id="appointment-container">

                </div>
            </div>
          
            
        )

    }

}

export default AppointmentsList
