import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h3" className={classes.title}>
                        PrimeHealth
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Button href="/BookAppointment" color="inherit">Book Now</Button>
                    </IconButton>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Button href="/AppointmentList" color="inherit">Appointment List</Button>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
