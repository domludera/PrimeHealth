import React, {useState} from 'react';
import TimePicker from 'react-time-picker';
import Calendar from 'react-calendar';
import { Select, InputLabel, MenuItem, Input } from '@material-ui/core';
import {set, useForm} from "react-hook-form";

import 'react-calendar/dist/Calendar.css'

import {makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    apptpicker: {
        marginLeft: '20%',
        marginRight: '20%',
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'row',
        alignItems:"center",
    },
    calendar: {
        display: "flex",
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        // backgroundColor: 'red',
        // color: props => props.color,
    },
    menu: {
        // display: "flex",
        // alignItems: 'center',
        // flexDirection: 'column',
        // justifyContent: 'center',
    },
    inputLabel: {
        minWidth: 300
    }
});


function BookAppointment(props) {
    const [starttime, onDateChange] = useState(new Date());
    const [time, onTimeChange] = useState('10:00');
    const {register, handleSubmit} = useForm();

    const classes = useStyles(props);


    const onSubmit = (data) => {
        var timeArr = time.split(":")
        starttime.setHours(timeArr[0])
        starttime.setMinutes(timeArr[1])
        var endtime = starttime
        endtime.setHours(starttime.getHours() + 2)
        data['starttime'] = starttime;
        data['endtime'] = endtime;
        dayClick(data)
    }

    function dayClick(value) {
        console.log(value);
        if (window.confirm('Confirm appointment ' + value.toString())) {
            postData('http://localhost:8080/appointments', {
                "starttime": value.starttime.toISOString(),
                "endtime": value.endtime.toISOString(),
                "doctor": {"id": value.doctor},
                "patient": {"id": 1}
            })
                .then(data => {
                    console.log(data); // JSON data parsed by `data.json()` call
                });
            alert('Confirmed')
        } else {
            alert('Cancelled')
        }

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
            <form sx={{m:1, minWidth: 300}} onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.apptpicker}>
                <div className={classes.calendar}>

                    <Calendar
                        value={starttime}
                        onChange={onDateChange}
                    />
                    <TimePicker
                        value={time}
                        onChange={onTimeChange}
                    />
                </div>
                <div className={classes.menu}>
                    <InputLabel className={classes.inputLabel} id="doctorid">Doctor</InputLabel>
                    <Select
                        labelId="doctorid"
                        label="Doctor"
                        {...register("doctor")}
                    >
                        <MenuItem value={1}>James Smith</MenuItem>
                        <MenuItem value={2}>Roy Johnson</MenuItem>
                        <MenuItem value={3}>Noah Williams</MenuItem>
                    </Select>

                </div>

                </div>
                <Input type="submit"/>

            </form>
        </div>
    );
}

export default BookAppointment
