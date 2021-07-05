import React, {Component} from 'react';

class AppointmentsList extends Component
{
    
    getAppoinmentsList()
    {
        var api_url = "http://localhost:8080/appointments";
        fetch(api_url).then(response => response.json()).then(data => 
          {
              // data is the returned array
              console.log(data);
              var i , html = "";
              
              for (i = 0; i < data.length; i++) 
              {
                
                var appointmentID ='<div >'+data[i].appointmentID+'</div>';
                var doctorID = '<div >'+data[i].doctorID+'</div>';
                var patientID = '<div >'+data[i].patientID+'</div>';
                var appDate ='<div >'+data[i].appDate+'</div>';
                var startTime ='<div>'+data[i].startTime+'</div>'
                var endTime= '<div id="p-price">'+data[i].endTime+'</div> <br><br>'
                html +='<div id = "appointment-info-container">'+ appointmentID + doctorID + patientID + location + pcategory + description +'</div><hr>';
    
              }
             document.getElementById("appointment-container").innerHTML = html; // insert content 
             document.getElementById("appointment-container").style.display= "block"; // show parts container
            
          
          }) // end then(data ==>)
    }

    render()
    {
        return <div id="appointment-container" style={{display:"none"}} >

        </div>
   
    }

}

export default AppointmentsList