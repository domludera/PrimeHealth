import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class BookBox extends Component {

    render() {
        return (
            <div id="bookBox"><a><Link to="/BookAppointment" id="reg">Book Now</Link></a></div>
        )
    }

}

export default BookBox 
