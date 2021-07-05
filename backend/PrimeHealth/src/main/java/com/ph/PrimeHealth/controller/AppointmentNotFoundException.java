package com.ph.PrimeHealth.controller;

public class AppointmentNotFoundException extends RuntimeException{
    AppointmentNotFoundException(int id){
        super("Could not find appointment " + id);
    }
}
