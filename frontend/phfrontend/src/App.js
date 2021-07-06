import logo from './logo.svg';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

/* components */
import Welcome from './components/Welcome';
import BookBox from './components/BookBox';
import AppointmentListBox   from './components/AppointmentListBox';
import AppointmentsList   from './components/AppointmentsList';
import BookAppointment  from './components/BookAppointment';

/*styles*/
//import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import './styles/bookbox.css';
import './styles/appointmentlistbox.css';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';



function App() {

  return (
    <Router>
      <div className="App">
          <Welcome/>
          <Route path="/bookAppointment" exact component={BookAppointment}/>
          <Route path="/appointmentList" exact component={AppointmentsList}/>
      </div>
    </Router>
  );
}

export default App;
