import {BrowserRouter as Router, Route} from 'react-router-dom';

/* components */
import Welcome from './components/Welcome';
import AppointmentsList from './components/AppointmentsList';
import BookAppointment from './components/BookAppointment';

/*styles*/
import './App.css';
import './styles/bookbox.css';
import './styles/appointmentlistbox.css';
import React from "react";


function App() {

    return (
        <Router>
            <div className="App">
                <Welcome/>
                <Route path="/bookAppointment" exact component={BookAppointment}/>
                <Route path="/" exact component={BookAppointment}/>
                <Route path="/appointmentList" exact component={AppointmentsList}/>
            </div>
        </Router>
    );
}

export default App;
