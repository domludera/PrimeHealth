import React, { useState } from 'react';
import Calendar from 'react-calendar';
function BookAppointment() {
    const [value, onChange] = useState(new Date());
    function dayClick(value) {
        if (window.confirm('Confirm appointment ' + value)) {
            postData('http://localhost:8080/appointments', {"starttime": value,"endtime": value,"doctor":{"id": 2},"patient": {"id": 1}})
                .then(data => {
                    console.log(data); // JSON data parsed by `data.json()` call
                });
            alert('Confirmed')
        } else {
            alert('Cancelled')
        }

    }
    function fullDay() {

    }
    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
    return (
        <div>
            <Calendar
                onClickDay = {dayClick}
                onChange={onChange}
                value={value}
            />
        </div>
    );
}
export default BookAppointment
