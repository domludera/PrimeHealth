import React, {useState, Component} from 'react';

class AppointmentsList extends Component {

    componentDidMount() {
        var api_url = "http://localhost:8080/appointments";
        fetch(api_url).then(response => response.json()).then(data => {
            // data is the returned array
            console.log(data);
            var i, html = "";

            for (i = 0; i < data.length; i++) {
                // var id = '<div >' + data[i].id + '</div>';
                var startTime = '<div>Start Time: ' + data[i].starttime + '</div>'
                var endTime = '<div id="p-price">End Time: ' + data[i].endtime + '</div> <br><br>'
                var doctorid = '<div >Doctor: ' + data[i].doctor.firstname + ' ' + data[i].doctor.lastname  + '</div>';
                var patientid = '<div >Patient: ' + data[i].patient.firstname + ' ' + data[i].doctor.lastname + '</div>';
                html += '<div id = "appointment-info-container">' + doctorid + patientid + startTime + endTime + '</div><hr>';

            }
            document.getElementById("appointment-container").innerHTML = html; // insert content
            document.getElementById("appointment-container").style.display = "block"; // show parts container


        }) // end then(data ==>)
    }

    render() {
        return (
            <div>
                <h1>Appointments List</h1>
                <div id="appointment-container">

                </div>
            </div>
        )

    }

}

export default AppointmentsList
