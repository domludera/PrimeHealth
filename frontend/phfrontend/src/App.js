import logo from './logo.svg';
import { BrowserRouter as Router,Route } from 'react-router-dom';

/* components */
import Welcome from './components/Welcome';
import BookBox from './components/BookBox';
import AppointmentListBox   from './components/AppointmentListBox';
import BookAppointment  from './components/BookAppointment';

/*styles*/
//import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import './styles/bookbox.css';
import './styles/appointmentlistbox.css';



function App() {
  return (
    <Router>
      <div className="App">
          <Route path="/" exact component={Welcome}/>
          <Route path="/" exact component={BookBox}/>
          <Route path="/" exact component={AppointmentListBox}/>
          <Route path="/bookAppointment" exact component={BookAppointment}/>
      </div>
    </Router>
  );
}

export default App;
